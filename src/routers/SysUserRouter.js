const express = require("express");
const router = express.Router();
const SysUserController = require("../controllers/SysUserController");
const { verifyAuth } = require("../middleware/auth");
const { verifyPermission } = require("../middleware/permission");
const permissions = require("../data/permissions");

router.get(
  "/sysuser",
  verifyAuth,
  verifyPermission(permissions.admin),
  SysUserController.getSysUser
);
router.post(
  "/sysuser",
  verifyAuth,
  verifyPermission(permissions.admin),
  SysUserController.postSysUser
);
router.put(
  "/sysuser/:id",
  verifyAuth,
  verifyPermission(permissions.admin),
  SysUserController.putSysUser
);
router.delete(
  "/sysuser/:id",
  verifyAuth,
  verifyPermission(permissions.admin),
  SysUserController.deleteSysUser
);
router.put(
  "/user",
  verifyAuth,
  verifyPermission(permissions.regular),
  SysUserController.getSysUser
);

module.exports = router;
