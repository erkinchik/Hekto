const ApiError = require("../errors/ApiError");
const bcrypt = require("bcrypt");
const UserService = require("../services/userService");
const { generateJwt } = require("../utils/index");

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    const salt = 8;
    const regExp = new RegExp(
      "^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$"
    );

    if (!email || !password) {
      return next(ApiError.badRequest("Неккоректный e-mail или пароль"));
    }
    const candidate = await UserService.findOne(email);
    if (candidate) {
      return next(ApiError.badRequest("Такой пользователь уже существует"));
    }
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await UserService.createUser(email, hashPassword, role);
    const basket = await UserService.createBasket(user.id);
    const token = generateJwt(user.id, email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await UserService.findOne(email);
    if (!user) {
      return next(ApiError.badRequest("Incorrect email or password"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword)
      return next(ApiError.badRequest("Incorrect Password"));

    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
