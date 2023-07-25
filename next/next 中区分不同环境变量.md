		package.json


```json
"build:dev": "cross-env NEXT_PUBLIC_DOMAIN_ENV=dev next build",
"build:prod": "cross-env NEXT_PUBLIC_DOMAIN_ENV=prod next build",
"build:test": "cross-env NEXT_PUBLIC_DOMAIN_ENV=test next build",
```




使用
```js
export const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_ENV !== 'prod' ? 'https://dev.qdleader.cc' : 'https://qdleader.cc';
```