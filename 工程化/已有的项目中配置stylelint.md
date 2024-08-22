首先 vscode 中 安装  Stylelint 插件

然后再package.json中配置
加入

```json

"devDependencies": {
   
    "postcss": "^8.4.12",
    "postcss-html": "^1.3.0",
    "postcss-scss": "^4.0.9",

    "sass": "^1.77.6",
    "sass-loader": "^14.2.1",
    "stylelint": "^14.6.0",
    "stylelint-config-html": "^1.0.0",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-recommended": "^7.0.0",
    "stylelint-config-recommended-scss": "^7.0.0",
    "stylelint-config-recommended-vue": "^1.4.0",
    "stylelint-config-standard": "^25.0.0",
    "stylelint-config-standard-scss": "^4.0.0",
    "stylelint-order": "^5.0.0",

  }
```


删除掉node_modules和package.lock.json 重新 install

然后在根目录创建一个.stylelintrc.js文件

```js
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recommended-scss',

  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      "files": ["**/*.vue"],
      "customSyntax": "postcss-html"
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', ],
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', ':deep']
      }
    ],
    'number-leading-zero': 'always',
    "value-keyword-case": [
        "lower",
        {
          "ignoreProperties": [ "@font-stack", "font-family", "font","border-radius" ],
          "camelCaseSvgKeywords": true
        }
    ],
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'string-quotes': 'single',
    'unit-case': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'rule-empty-line-before': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'block-opening-brace-space-before': 'always',
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'property-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'deep'] }
    ],
    'function-no-unknown': null,
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
};


```


在你的 vscode 的settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  "stylelint.validate": ["css", "scss", "vue", "html"],
  "eslint.validate": ["typescript", "vue", "html", "json"],
  "files.associations": {
    "*.json": "jsonc"
  }
}
```


配置完后重启vscode ，保存一下试试即可