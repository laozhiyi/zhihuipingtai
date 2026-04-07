## 前端开发说明

---

### 环境要求

1. **Node.js 版本要求**：17.0及以上。
2. **包管理工具**：统一使用 `npm` 作为包管理器（可以根据需要自行配置国内源，但不要与 Yarn、Pnpm、Cnpm 等混用）。
3. **代码可靠性**：由于时间限制，无法进行代码 Review，请自行确保提交代码的可靠性（代码提交记录会在仓库中留存）。
4. **路径别名**：在 `vue-router` 中使用 `@` 代替 `../`。

---

### 测试账号

> 本地开发环境使用 Mock.js 模拟数据，请使用以下测试账号登录：

| 用户名 | 密码 |
|--------|------|
| test | 123456 |

---

### 项目结构

```
front-end-template/
├── .gitignore                  # Git忽略配置
├── index.html                  # HTML入口文件
├── jsconfig.json               # JS配置文件
├── package.json                # 项目依赖配置
├── package-lock.json            # 依赖锁定文件
├── README.en.md                 # 英文说明文档
├── README.md                    # 说明文档
├── tailwind.config.js          # TailwindCSS配置
├── vite.config.js              # Vite构建配置
├── yarn.lock                   # Yarn锁定文件
│
├── public/                      # 公共资源目录
│   ├── background.jpg           # 登录页背景图
│   ├── favicon.ico              # 网站图标
│   └── loginPCTool.webp         # 登录页工具图标
│
└── src/                         # 源代码目录
    ├── App.vue                 # 根组件
    ├── main.js                 # 项目入口文件
    │
    ├── api/                    # API接口目录
    │   └── index.js            # Axios配置及接口定义
    │
    ├── assets/                 # 静态资源目录
    │   ├── gxnu.png            # 广西师范大学校徽
    │   ├── index.css          # 全局样式入口
    │   ├── logo.svg            # Logo图标
    │   └── styles.css          # 全局样式
    │
    ├── components/             # 公共组件目录
    │   ├── HomeFooter.vue     # 底部组件
    │   └── HomeHeader.vue     # 顶部导航组件
    │
    ├── mock/                   # Mock模拟数据目录
    │   └── index.js            # Mock.js配置及模拟接口
    │
    ├── router/                # 路由配置目录
    │   └── index.js            # Vue Router路由配置
    │
    ├── stores/                 # 状态管理目录
    │   └── auth.js             # 认证状态管理
    │
    └── views/                  # 页面视图目录
        ├── HomeView.vue        # 主页视图
        ├── LoginView.vue       # 登录页视图
        └── home/               # 首页子模块目录
            ├── Dashboard.vue   # 数据仪表盘组件
            └── HomeContent.vue # 首页内容组件
```

---

### 使用技术栈说明

1. **Vue3**：前端框架。
2. **Pinia**：状态管理工具。
3. **Vue Router**：用于单页面开发的路由工具。
4. **Element Plus**：UI 组件库。
5. **Axios**：HTTP 请求管理工具。
6. **Mock.js**：用于本地或云端模拟数据。

---

### 开始开发

#### 1. 配置私有仓库

##### 1.1 生成 RSA 密钥

在终端中执行以下命令生成 RSA 密钥：

```bash
ssh-keygen -t rsa
```

##### 1.2 配置 RSA 公钥

打开生成的 `.pub` 后缀文件，将其中的内容拷贝并配置到 [SSH 公钥](https://gitee.com/profile/sshkeys) 中。

##### 1.3 克隆远程仓库

执行以下命令拉取远程仓库：

```bash
git clone git@gitee.com:codezzzsleep/ai-evaluate-frontend.git
```

#### 2. 项目初始化

##### 2.1 进入项目目录

```bash
cd ai-evaluate-frontend
```

##### 2.2 安装依赖

```bash
npm install
```

##### 2.3 启动开发环境

```bash
npm run dev
```

---

### 提交代码流程

#### 1. 同步远程代码

在提交之前，先拉取远程代码以保持最新状态：

```bash
git pull
```

> **注意**：拉取远程代码时可能会导致冲突，请自行解决冲突问题。

#### 2. 添加文件到暂存区

根据需要将文件添加到暂存区：

```bash
git add filename    # 添加指定文件
# 或
git add .           # 添加所有修改的文件
```

#### 3. 配置提交信息

提交代码时，请使用中文详细描述本次更改内容：

```bash
git commit -m "请使用中文描述你本次提交的更改"
```

> **注意**：提交的版本需保证代码可运行。

#### 4. 推送代码到远程仓库

完成提交后，将代码推送至远程仓库：

```bash
git push
```

---

### 代码版本管理

#### 代码回滚

如需回滚代码到某个版本，请谨慎操作，确保已备份重要内容：

```bash
git reset --hard <commit_id>
```

> **注意**：回滚后本地代码会变为指定版本，请根据实际需求同步到远程。

---

### 其他注意事项

1. **单页面功能测试**：请在提交代码前，确保所有功能经过测试且能够正常运行。
2. **定期提交可运行版本**：确保每次提交的代码都是稳定的，避免影响团队其他成员的开发。
3. **冲突处理**：及时拉取远程代码，解决冲突问题，保持代码仓库的同步性。

---

如果有任何疑问或需要支持，请及时与团队沟通。
