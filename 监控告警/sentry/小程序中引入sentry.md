# 小程序中引入sentry

```js
npm install sentry-miniapp --save
```

在app.js中引入
```js
import * as Sentry from "sentry-miniapp";

  onLaunch: function() {
  

    Sentry.init({
      dsn: "https://9f521f47a6ff4aaf81c12ce83ed52e0a@devsentry.myserver.cn/4",
      // ...
    });

    // Set user information, as well as tags and further extras
    Sentry.configureScope((scope) => {
      scope.setExtra("battery", 0.7);
      scope.setTag("user_mode", "admin");
      scope.setUser({ id: "4711" });
      // scope.clear();
    });

    // Add a breadcrumb for future events
    Sentry.addBreadcrumb({
      message: "My Breadcrumb",
      // ...
    });

    // Capture exceptions, messages or manual events
    Sentry.captureException(new Error("Good bye"));
    Sentry.captureMessage("Hello, world!");
    Sentry.captureEvent({
      message: "Manual",
      stacktrace: [
        // ...
      ],
    });

  },

```

打开微信开发工具-工具-构建npm即可

在项目里写个报错，去后台看看吧
