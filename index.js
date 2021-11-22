module.exports = {
  "extends": [],
  "rules": {
    "jsx-a11y/accessible-emoji": [
      "warn"
    ],
    "jsx-a11y/alt-text": [
      "warn",
      {
        "elements": [
          "img",
          "object",
          "area",
          "input[type=\"image\"]"
        ],
        "img": [],
        "object": [],
        "area": [],
        "input[type=\"image\"]": []
      }
    ],
    "jsx-a11y/anchor-has-content": [
      "warn",
      {
        "components": []
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to"
        ],
        "aspects": [
          "noHref",
          "invalidHref",
          "preferButton"
        ]
      }
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": [
      "warn"
    ],
    "jsx-a11y/aria-props": [
      "warn"
    ],
    "jsx-a11y/aria-proptypes": [
      "warn"
    ],
    "jsx-a11y/aria-role": [
      "warn",
      {
        "ignoreNonDOM": false
      }
    ],
    "jsx-a11y/aria-unsupported-elements": [
      "warn"
    ],
    "jsx-a11y/autocomplete-valid": [
      "warn",
      {
        "inputComponents": []
      }
    ],
    "jsx-a11y/click-events-have-key-events": [
      "warn"
    ],
    "jsx-a11y/control-has-associated-label": [
      "warn",
      {
        "labelAttributes": [
          "label"
        ],
        "controlComponents": [],
        "ignoreElements": [
          "audio",
          "canvas",
          "embed",
          "input",
          "textarea",
          "tr",
          "video"
        ],
        "ignoreRoles": [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid"
        ],
        "depth": 5
      }
    ],
    "jsx-a11y/heading-has-content": [
      "warn",
      {
        "components": [
          ""
        ]
      }
    ],
    "jsx-a11y/html-has-lang": [
      "warn"
    ],
    "jsx-a11y/iframe-has-title": [
      "warn"
    ],
    "jsx-a11y/img-redundant-alt": [
      "warn"
    ],
    "jsx-a11y/interactive-supports-focus": [
      "warn"
    ],
    "jsx-a11y/label-has-associated-control": [
      "warn",
      {
        "labelComponents": [],
        "labelAttributes": [],
        "controlComponents": [],
        "assert": "both",
        "depth": 25
      }
    ],
    "jsx-a11y/lang": [
      "warn"
    ],
    "jsx-a11y/media-has-caption": [
      "warn",
      {
        "audio": [],
        "video": [],
        "track": []
      }
    ],
    "jsx-a11y/mouse-events-have-key-events": [
      "warn"
    ],
    "jsx-a11y/no-access-key": [
      "warn"
    ],
    "jsx-a11y/no-autofocus": [
      "warn",
      {
        "ignoreNonDOM": true
      }
    ],
    "jsx-a11y/no-distracting-elements": [
      "warn",
      {
        "elements": [
          "marquee",
          "blink"
        ]
      }
    ],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "warn",
      {
        "tr": [
          "none",
          "presentation"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      "warn",
      {
        "handlers": [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "warn",
      {
        "ul": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "ol": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "li": [
          "menuitem",
          "option",
          "row",
          "tab",
          "treeitem"
        ],
        "table": [
          "grid"
        ],
        "td": [
          "gridcell"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      "warn",
      {
        "tags": [],
        "roles": [
          "tabpanel"
        ]
      }
    ],
    "jsx-a11y/no-onchange": [
      "warn"
    ],
    "jsx-a11y/no-redundant-roles": [
      "warn"
    ],
    "jsx-a11y/no-static-element-interactions": [
      "warn",
      {
        "handlers": [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp"
        ]
      }
    ],
    "jsx-a11y/role-has-required-aria-props": [
      "warn"
    ],
    "jsx-a11y/role-supports-aria-props": [
      "warn"
    ],
    "jsx-a11y/scope": [
      "warn"
    ],
    "jsx-a11y/tabindex-no-positive": [
      "warn"
    ],
    "jsx-a11y/label-has-for": [
      "warn",
      {
        "components": [],
        "required": {
          "every": [
            "nesting",
            "id"
          ]
        },
        "allowChildren": false
      }
    ],
    "no-underscore-dangle": [
      "warn",
      {
        "allow": [
          "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
        ],
        "allowAfterThis": false,
        "allowAfterSuper": false,
        "enforceInMethodNames": true,
        "allowAfterThisConstructor": false,
        "allowFunctionParams": true
      }
    ],
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "class-methods-use-this": [
      "warn",
      {
        "exceptMethods": [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "componentDidCatch",
          "getSnapshotBeforeUpdate"
        ],
        "enforceForClassFields": true
      }
    ],
    "react/display-name": [
      "warn",
      {
        "ignoreTranspilerName": false
      }
    ],
    "react/forbid-prop-types": [
      "warn",
      {
        "forbid": [
          "any",
          "array",
          "object"
        ],
        "checkContextTypes": true,
        "checkChildContextTypes": true
      }
    ],
    "react/forbid-dom-props": [
      "warn",
      {
        "forbid": []
      }
    ],
    "react/jsx-boolean-value": [
      "warn",
      "never",
      {
        "always": []
      }
    ],
    "react/jsx-closing-bracket-location": [
      "warn",
      "line-aligned"
    ],
    "react/jsx-closing-tag-location": [
      "warn"
    ],
    "react/jsx-curly-spacing": [
      "warn",
      "never",
      {
        "allowMultiline": true
      }
    ],
    "react/jsx-handler-names": [
      "warn",
      {
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-indent-props": [
      "warn",
      2
    ],
    "react/jsx-key": [
      "warn"
    ],
    "react/jsx-max-props-per-line": [
      "warn",
      {
        "maximum": 1,
        "when": "multiline"
      }
    ],
    "react/jsx-no-bind": [
      "warn",
      {
        "ignoreRefs": true,
        "allowArrowFunctions": true,
        "allowFunctions": false,
        "allowBind": false,
        "ignoreDOMComponents": true
      }
    ],
    "react/jsx-no-duplicate-props": [
      "warn",
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-no-literals": [
      "warn",
      {
        "noStrings": true
      }
    ],
    "react/jsx-no-undef": [
      "warn"
    ],
    "react/jsx-pascal-case": [
      "warn",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/sort-prop-types": [
      "warn",
      {
        "ignoreCase": true,
        "callbacksLast": false,
        "requiredFirst": false,
        "sortShapeProp": true
      }
    ],
    // "react/jsx-sort-prop-types": [
    //   "warn"
    // ],
    "react/jsx-sort-props": [
      "warn",
      {
        "ignoreCase": true,
        "callbacksLast": false,
        "shorthandFirst": false,
        "shorthandLast": false,
        "noSortAlphabetically": false,
        "reservedFirst": true
      }
    ],
    "react/jsx-sort-default-props": [
      "warn",
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-uses-react": [
      "warn"
    ],
    "react/jsx-uses-vars": [
      "warn"
    ],
    "react/no-danger": [
      "warn"
    ],
    "react/no-deprecated": [
      "warn"
    ],
    "react/no-did-mount-set-state": [
      "warn"
    ],
    "react/no-did-update-set-state": [
      "warn"
    ],
    "react/no-will-update-set-state": [
      "warn"
    ],
    "react/no-direct-mutation-state": [
      "warn"
    ],
    "react/no-is-mounted": [
      "warn"
    ],
    "react/no-multi-comp": [
      "warn"
    ],
    "react/no-set-state": [
      "warn"
    ],
    "react/no-string-refs": [
      "warn"
    ],
    "react/no-unknown-property": [
      "warn"
    ],
    "react/prefer-es6-class": [
      "warn",
      "always"
    ],
    "react/prefer-stateless-function": [
      "warn",
      {
        "ignorePureComponents": true
      }
    ],
    "react/prop-types": [
      "warn",
      {
        "ignore": [],
        "customValidators": [],
        "skipUndeclared": false
      }
    ],
    "react/react-in-jsx-scope": [
      "warn"
    ],
    "react/require-render-return": [
      "warn"
    ],
    "react/self-closing-comp": [
      "warn"
    ],
    "react/sort-comp": [
      "warn",
      {
        "order": [
          "static-variables",
          "static-methods",
          "instance-variables",
          "lifecycle",
          "/^handle.+$/",
          "/^on.+$/",
          "getters",
          "setters",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "instance-methods",
          "everything-else",
          "rendering"
        ],
        "groups": {
          "lifecycle": [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "getInitialState",
            "state",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount"
          ],
          "rendering": [
            "/^render.+$/",
            "render"
          ]
        }
      }
    ],
    "react/jsx-wrap-multilines": [
      "warn",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "react/jsx-first-prop-new-line": [
      "warn",
      "multiline-multiprop"
    ],
    "react/jsx-equals-spacing": [
      "warn",
      "never"
    ],
    "react/jsx-indent": [
      "warn",
      2
    ],
    "react/jsx-no-target-blank": [
      "warn",
      {
        "enforceDynamicLinks": "always",
        "links": true,
        "forms": false
      }
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".jsx"
        ]
      }
    ],
    "react/jsx-no-comment-textnodes": [
      "warn"
    ],
    "react/no-render-return-value": [
      "warn"
    ],
    "react/require-optimization": [
      "warn",
      {
        "allowDecorators": []
      }
    ],
    "react/no-find-dom-node": [
      "warn"
    ],
    "react/forbid-component-props": [
      "warn",
      {
        "forbid": []
      }
    ],
    "react/forbid-elements": [
      "warn",
      {
        "forbid": []
      }
    ],
    "react/no-danger-with-children": [
      "warn"
    ],
    "react/no-unused-prop-types": [
      "warn",
      {
        "customValidators": [],
        "skipShapeProps": true
      }
    ],
    "react/style-prop-object": [
      "warn"
    ],
    "react/no-unescaped-entities": [
      "warn"
    ],
    "react/no-children-prop": [
      "warn"
    ],
    "react/jsx-tag-spacing": [
      "warn",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    // "react/jsx-space-before-closing": [
    //   "warn",
    //   "always"
    // ],
    "react/no-array-index-key": [
      "warn"
    ],
    "react/require-default-props": [
      "warn",
      {
        "forbidDefaultForRequired": true
      }
    ],
    "react/forbid-foreign-prop-types": [
      "warn",
      {
        "allowInPropTypes": true
      }
    ],
    "react/void-dom-elements-no-children": [
      "warn"
    ],
    "react/default-props-match-prop-types": [
      "warn",
      {
        "allowRequiredDefaults": false
      }
    ],
    "react/no-redundant-should-component-update": [
      "warn"
    ],
    "react/no-unused-state": [
      "warn"
    ],
    // "react/boolean-prop-naming": [
    //   "warn",
    //   {
    //     "propTypeNames": [
    //       "bool",
    //       "mutuallyExclusiveTrueProps"
    //     ],
    //     "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
    //     "message": ""
    //   }
    // ],
    "react/no-typos": [
      "warn"
    ],
    "react/jsx-curly-brace-presence": [
      "warn",
      {
        "props": "never",
        "children": "never"
      }
    ],
    "react/jsx-one-expression-per-line": [
      "warn",
      {
        "allow": "single-child"
      }
    ],
    "react/destructuring-assignment": [
      "warn",
      "always"
    ],
    "react/no-access-state-in-setstate": [
      "warn"
    ],
    "react/button-has-type": [
      "warn",
      {
        "button": true,
        "submit": true,
        "reset": false
      }
    ],
    "react/jsx-child-element-spacing": [
      "warn"
    ],
    "react/no-this-in-sfc": [
      "warn"
    ],
    "react/jsx-max-depth": [
      "warn"
    ],
    "react/jsx-props-no-multi-spaces": [
      "warn"
    ],
    "react/no-unsafe": [
      "warn"
    ],
    "react/jsx-fragments": [
      "warn",
      "syntax"
    ],
    "react/jsx-curly-newline": [
      "warn",
      {
        "multiline": "consistent",
        "singleline": "consistent"
      }
    ],
    "react/state-in-constructor": [
      "warn",
      "always"
    ],
    "react/static-property-placement": [
      "warn",
      "property assignment"
    ],
    "react/jsx-props-no-spreading": [
      "warn",
      {
        "html": "enforce",
        "custom": "enforce",
        "explicitSpread": "ignore",
        "exceptions": []
      }
    ],
    "react/prefer-read-only-props": [
      "warn"
    ],
    "react/jsx-no-script-url": [
      "warn",
      [
        {
          "name": "Link",
          "props": [
            "to"
          ]
        }
      ]
    ],
    "react/jsx-no-useless-fragment": [
      "warn"
    ],
    "react/no-adjacent-inline-elements": [
      "warn"
    ],
    "react/function-component-definition": [
      "warn",
      {
        "namedComponents": "function-expression",
        "unnamedComponents": "function-expression"
      }
    ],
    "react/jsx-newline": [
      "warn"
    ],
    "react/jsx-no-constructed-context-values": [
      "warn"
    ],
    "react/no-unstable-nested-components": [
      "warn"
    ],
    "react/no-namespace": [
      "warn"
    ],
    "react/prefer-exact-props": [
      "warn"
    ],
    "react/no-arrow-function-lifecycle": [
      "warn"
    ],
    "react/no-invalid-html-attribute": [
      "warn"
    ],
    "react/no-unused-class-component-methods": [
      "warn"
    ],
    "strict": [
      "warn",
      "never"
    ],
    "import/no-unresolved": [
      "warn",
      {
        "commonjs": true,
        "caseSensitive": true,
        "caseSensitiveStrict": false
      }
    ],
    "import/named": [
      "warn"
    ],
    "import/default": [
      "warn"
    ],
    "import/namespace": [
      "warn"
    ],
    "import/export": [
      "warn"
    ],
    "import/no-named-as-default": [
      "warn"
    ],
    "import/no-named-as-default-member": [
      "warn"
    ],
    "import/no-deprecated": [
      "warn"
    ],
    "import/no-extraneous-dependencies": [
      "warn",
      {
        "devDependencies": [
          "test/**",
          "tests/**",
          "spec/**",
          "**/__tests__/**",
          "**/__mocks__/**",
          "test.{js,jsx}",
          "test-*.{js,jsx}",
          "**/*{.,_}{test,spec}.{js,jsx}",
          "**/jest.config.js",
          "**/jest.setup.js",
          "**/vue.config.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/rollup.config.*.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile{,.js}",
          "**/protractor.conf.js",
          "**/protractor.conf.*.js",
          "**/karma.conf.js",
          "**/.eslintrc.js"
        ],
        "optionalDependencies": false
      }
    ],
    "import/no-mutable-exports": [
      "warn"
    ],
    "import/no-commonjs": [
      "warn"
    ],
    "import/no-amd": [
      "warn"
    ],
    "import/no-nodejs-modules": [
      "warn"
    ],
    "import/first": [
      "warn"
    ],
    "import/imports-first": [
      "warn"
    ],
    "import/no-duplicates": [
      "warn"
    ],
    "import/no-namespace": [
      "warn"
    ],
    "import/extensions": [
      "warn",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "jsx": "never"
      }
    ],
    "import/order": [
      "warn",
      {
        "groups": [
          [
            "builtin",
            "external",
            "internal"
          ]
        ],
        "warnOnUnassignedImports": false
      }
    ],
    "import/newline-after-import": [
      "warn"
    ],
    "import/prefer-default-export": [
      "warn"
    ],
    "import/no-restricted-paths": [
      "warn"
    ],
    "import/max-dependencies": [
      "warn",
      {
        "max": 10
      }
    ],
    "import/no-absolute-path": [
      "warn"
    ],
    "import/no-dynamic-require": [
      "warn"
    ],
    "import/no-internal-modules": [
      "warn",
      {
        "allow": []
      }
    ],
    "import/unambiguous": [
      "warn"
    ],
    "import/no-webpack-loader-syntax": [
      "warn"
    ],
    "import/no-unassigned-import": [
      "warn"
    ],
    "import/no-named-default": [
      "warn"
    ],
    "import/no-anonymous-default-export": [
      "warn",
      {
        "allowArray": false,
        "allowArrowFunction": false,
        "allowAnonymousClass": false,
        "allowAnonymousFunction": false,
        "allowLiteral": false,
        "allowObject": false
      }
    ],
    "import/exports-last": [
      "warn"
    ],
    "import/group-exports": [
      "warn"
    ],
    "import/no-default-export": [
      "warn"
    ],
    "import/no-named-export": [
      "warn"
    ],
    "import/no-self-import": [
      "warn"
    ],
    "import/no-cycle": [
      "warn",
      {
        "maxDepth": "∞",
        "ignoreExternal": false
      }
    ],
    "import/no-useless-path-segments": [
      "warn",
      {
        "commonjs": true
      }
    ],
    "import/dynamic-import-chunkname": [
      "warn",
      {
        "importFunctions": [],
        "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+"
      }
    ],
    "import/no-relative-parent-imports": [
      "warn"
    ],
    "import/no-unused-modules": [
      "warn",
      {
        // "ignoreExports": [],
        "missingExports": true,
        "unusedExports": true
      }
    ],
    "import/no-import-module-exports": [
      "warn",
      {
        "exceptions": []
      }
    ],
    "import/no-relative-packages": [
      "warn"
    ],
    "arrow-body-style": [
      "warn",
      "as-needed",
      {
        "requireReturnForObjectLiteral": false
      }
    ],
    "arrow-parens": [
      "warn",
      "always"
    ],
    "arrow-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "constructor-super": [
      "warn"
    ],
    "generator-star-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "no-class-assign": [
      "warn"
    ],
    "no-confusing-arrow": [
      "warn",
      {
        "allowParens": true
      }
    ],
    "no-const-assign": [
      "warn"
    ],
    "no-dupe-class-members": [
      "warn"
    ],
    "no-duplicate-imports": [
      "warn"
    ],
    "no-new-symbol": [
      "warn"
    ],
    "no-restricted-exports": [
      "warn",
      {
        "restrictedNamedExports": [
          "default",
          "then"
        ]
      }
    ],
    "no-restricted-imports": [
      "warn",
      {
        "paths": [],
        "patterns": []
      }
    ],
    "no-this-before-super": [
      "warn"
    ],
    "no-useless-computed-key": [
      "warn"
    ],
    "no-useless-constructor": [
      "warn"
    ],
    "no-useless-rename": [
      "warn",
      {
        "ignoreDestructuring": false,
        "ignoreImport": false,
        "ignoreExport": false
      }
    ],
    "no-var": [
      "warn"
    ],
    "object-shorthand": [
      "warn",
      "always",
      {
        "ignoreConstructors": false,
        "avoidQuotes": true
      }
    ],
    "prefer-arrow-callback": [
      "warn",
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": true
      }
    ],
    "prefer-const": [
      "warn",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }
    ],
    "prefer-destructuring": [
      "warn",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": true,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prefer-numeric-literals": [
      "warn"
    ],
    "prefer-reflect": [
      "warn"
    ],
    "prefer-rest-params": [
      "warn"
    ],
    "prefer-spread": [
      "warn"
    ],
    "prefer-template": [
      "warn"
    ],
    "require-yield": [
      "warn"
    ],
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    "sort-imports": [
      "warn",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "symbol-description": [
      "warn"
    ],
    "template-curly-spacing": [
      "warn"
    ],
    "yield-star-spacing": [
      "warn",
      "after"
    ],
    "init-declarations": [
      "warn"
    ],
    "no-catch-shadow": [
      "warn"
    ],
    "no-delete-var": [
      "warn"
    ],
    "no-label-var": [
      "warn"
    ],
    "no-restricted-globals": [
      "warn",
      {
        "name": "isFinite",
        "message": "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite"
      },
      {
        "name": "isNaN",
        "message": "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan"
      },
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top"
    ],
    "no-shadow": [
      "warn"
    ],
    "no-shadow-restricted-names": [
      "warn"
    ],
    "no-undef": [
      "warn"
    ],
    "no-undef-init": [
      "warn"
    ],
    "no-undefined": [
      "warn"
    ],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": [
      "warn",
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "array-bracket-newline": [
      "warn",
      "consistent"
    ],
    "array-element-newline": [
      "warn",
      {
        "multiline": true,
        "minItems": 3
      }
    ],
    "array-bracket-spacing": [
      "warn",
      "never"
    ],
    "block-spacing": [
      "warn",
      "always"
    ],
    "brace-style": [
      "warn",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": [
      "warn",
      {
        "properties": "never",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "capitalized-comments": [
      "warn",
      "never",
      {
        "line": {
          "ignorePattern": ".*",
          "ignoreInlineComments": true,
          "ignoreConsecutiveComments": true
        },
        "block": {
          "ignorePattern": ".*",
          "ignoreInlineComments": true,
          "ignoreConsecutiveComments": true
        }
      }
    ],
    "comma-dangle": [
      "warn",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ],
    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "warn",
      "last",
      {
        "exceptions": {
          "ArrayExpression": false,
          "ArrayPattern": false,
          "ArrowFunctionExpression": false,
          "CallExpression": false,
          "FunctionDeclaration": false,
          "FunctionExpression": false,
          "ImportDeclaration": false,
          "ObjectExpression": false,
          "ObjectPattern": false,
          "VariableDeclaration": false,
          "NewExpression": false
        }
      }
    ],
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    "consistent-this": [
      "warn"
    ],
    "eol-last": [
      "warn",
      "always"
    ],
    "function-call-argument-newline": [
      "warn",
      "consistent"
    ],
    "func-call-spacing": [
      "warn",
      "never"
    ],
    "func-name-matching": [
      "warn",
      "always",
      {
        "includeCommonJSModuleExports": false,
        "considerPropertyDescriptor": true
      }
    ],
    "func-names": [
      "warn"
    ],
    "func-style": [
      "warn",
      "expression"
    ],
    "function-paren-newline": [
      "warn",
      "multiline-arguments"
    ],
    "id-denylist": [
      "warn"
    ],
    "id-length": [
      "warn"
    ],
    "id-match": [
      "warn"
    ],
    "implicit-arrow-linebreak": [
      "warn",
      "beside"
    ],
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "outerIIFEBody": 1,
        "FunctionDeclaration": {
          "parameters": 1,
          "body": 1
        },
        "FunctionExpression": {
          "parameters": 1,
          "body": 1
        },
        "CallExpression": {
          "arguments": 1
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoredNodes": [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "ignoreComments": false,
        "offsetTernaryExpressions": false
      }
    ],
    "key-spacing": [
      "warn",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true,
        "overrides": {
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          },
          "case": {
            "after": true
          }
        }
      }
    ],
    "line-comment-position": [
      "warn",
      {
        "position": "above",
        "ignorePattern": "",
        "applyDefaultPatterns": true
      }
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "lines-between-class-members": [
      "warn",
      "always",
      {
        "exceptAfterSingleLine": false
      }
    ],
    "lines-around-comment": [
      "warn"
    ],
    "lines-around-directive": [
      "warn",
      {
        "before": "always",
        "after": "always"
      }
    ],
    "max-depth": [
      "warn",
      4
    ],
    "max-len": [
      "warn",
      100,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "max-lines": [
      "warn",
      {
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-lines-per-function": [
      "warn",
      {
        "max": 50,
        "skipBlankLines": true,
        "skipComments": true,
        "IIFEs": true
      }
    ],
    "max-nested-callbacks": [
      "warn"
    ],
    "max-params": [
      "warn",
      3
    ],
    "max-statements": [
      "warn",
      10
    ],
    "max-statements-per-line": [
      "warn",
      {
        "max": 1
      }
    ],
    "multiline-comment-style": [
      "warn",
      "starred-block"
    ],
    "multiline-ternary": [
      "warn",
      "never"
    ],
    "new-cap": [
      "warn",
      {
        "newIsCap": true,
        "newIsCapExceptions": [],
        "capIsNew": false,
        "capIsNewExceptions": [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List"
        ],
        "properties": true
      }
    ],
    "new-parens": [
      "warn"
    ],
    "newline-after-var": [
      "warn"
    ],
    "newline-before-return": [
      "warn"
    ],
    "newline-per-chained-call": [
      "warn",
      {
        "ignoreChainWithDepth": 4
      }
    ],
    "no-array-constructor": [
      "warn"
    ],
    "no-bitwise": [
      "warn"
    ],
    "no-continue": [
      "warn"
    ],
    "no-inline-comments": [
      "warn"
    ],
    "no-lonely-if": [
      "warn"
    ],
    "no-mixed-operators": [
      "warn",
      {
        "groups": [
          [
            "%",
            "**"
          ],
          [
            "%",
            "+"
          ],
          [
            "%",
            "-"
          ],
          [
            "%",
            "*"
          ],
          [
            "%",
            "/"
          ],
          [
            "/",
            "*"
          ],
          [
            "&",
            "|",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!=="
          ],
          [
            "&&",
            "||"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],
    "no-mixed-spaces-and-tabs": [
      "warn"
    ],
    "no-multi-assign": [
      "warn"
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "no-negated-condition": [
      "warn"
    ],
    "no-nested-ternary": [
      "warn"
    ],
    "no-new-object": [
      "warn"
    ],
    "no-plusplus": [
      "warn"
    ],
    "no-restricted-syntax": [
      "warn",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "no-spaced-func": [
      "warn"
    ],
    "no-tabs": [
      "warn"
    ],
    "no-ternary": [
      "warn"
    ],
    "no-trailing-spaces": [
      "warn",
      {
        "skipBlankLines": false,
        "ignoreComments": false
      }
    ],
    "no-unneeded-ternary": [
      "warn",
      {
        "defaultAssignment": false
      }
    ],
    "no-whitespace-before-property": [
      "warn"
    ],
    "nonblock-statement-body-position": [
      "warn",
      "beside",
      {
        "overrides": {}
      }
    ],
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-curly-newline": [
      "warn",
      {
        "ObjectExpression": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ObjectPattern": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ImportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        },
        "ExportDeclaration": {
          "minProperties": 4,
          "multiline": true,
          "consistent": true
        }
      }
    ],
    "object-property-newline": [
      "warn",
      {
        "allowAllPropertiesOnSameLine": true,
        "allowMultiplePropertiesPerLine": false
      }
    ],
    "one-var": [
      "warn",
      "never"
    ],
    "one-var-declaration-per-line": [
      "warn",
      "always"
    ],
    "operator-assignment": [
      "warn",
      "always"
    ],
    "operator-linebreak": [
      "warn",
      "before",
      {
        "overrides": {
          "=": "none"
        }
      }
    ],
    "padded-blocks": [
      "warn",
      {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      },
      {
        "allowSingleLineBlocks": true
      }
    ],
    "padding-line-between-statements": [
      "warn"
    ],
    "prefer-exponentiation-operator": [
      "warn"
    ],
    "prefer-object-spread": [
      "warn"
    ],
    "quote-props": [
      "warn",
      "as-needed",
      {
        "keywords": false,
        "unnecessary": true,
        "numbers": false
      }
    ],
    "quotes": [
      "warn",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "require-jsdoc": [
      "warn"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "semi-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "semi-style": [
      "warn",
      "last"
    ],
    "sort-keys": [
      "warn",
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "sort-vars": [
      "warn"
    ],
    "space-before-blocks": [
      "warn"
    ],
    "space-before-function-paren": [
      "warn",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "warn",
      "never"
    ],
    "space-infix-ops": [
      "warn"
    ],
    "space-unary-ops": [
      "warn",
      {
        "words": true,
        "nonwords": false,
        "overrides": {}
      }
    ],
    "spaced-comment": [
      "warn",
      "always",
      {
        "line": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!",
            "/"
          ]
        },
        "block": {
          "exceptions": [
            "-",
            "+"
          ],
          "markers": [
            "=",
            "!",
            ":",
            "::"
          ],
          "balanced": true
        }
      }
    ],
    "switch-colon-spacing": [
      "warn",
      {
        "after": true,
        "before": false
      }
    ],
    "template-tag-spacing": [
      "warn",
      "never"
    ],
    "unicode-bom": [
      "warn",
      "never"
    ],
    "wrap-regex": [
      "warn"
    ],
    "callback-return": [
      "warn"
    ],
    "global-require": [
      "warn"
    ],
    "handle-callback-err": [
      "warn"
    ],
    "no-buffer-constructor": [
      "warn"
    ],
    "no-mixed-requires": [
      "warn",
      false
    ],
    "no-new-require": [
      "warn"
    ],
    "no-path-concat": [
      "warn"
    ],
    "no-process-env": [
      "warn"
    ],
    "no-process-exit": [
      "warn"
    ],
    "no-restricted-modules": [
      "warn"
    ],
    "no-sync": [
      "warn"
    ],
    "for-direction": [
      "warn"
    ],
    "getter-return": [
      "warn",
      {
        "allowImplicit": true
      }
    ],
    "no-async-promise-executor": [
      "warn"
    ],
    "no-await-in-loop": [
      "warn"
    ],
    "no-compare-neg-zero": [
      "warn"
    ],
    "no-cond-assign": [
      "warn",
      "always"
    ],
    "no-console": [
      "warn"
    ],
    "no-constant-condition": [
      "warn"
    ],
    "no-control-regex": [
      "warn"
    ],
    "no-debugger": [
      "warn"
    ],
    "no-dupe-args": [
      "warn"
    ],
    "no-dupe-else-if": [
      "warn"
    ],
    "no-dupe-keys": [
      "warn"
    ],
    "no-duplicate-case": [
      "warn"
    ],
    "no-empty": [
      "warn"
    ],
    "no-empty-character-class": [
      "warn"
    ],
    "no-ex-assign": [
      "warn"
    ],
    "no-extra-boolean-cast": [
      "warn"
    ],
    "no-extra-parens": [
      "warn",
      "all",
      {
        "conditionalAssign": true,
        "nestedBinaryExpressions": false,
        "returnAssign": false,
        "ignoreJSX": "all",
        "enforceForArrowConditionals": false
      }
    ],
    "no-extra-semi": [
      "warn"
    ],
    "no-func-assign": [
      "warn"
    ],
    "no-import-assign": [
      "warn"
    ],
    "no-inner-declarations": [
      "warn"
    ],
    "no-invalid-regexp": [
      "warn"
    ],
    "no-irregular-whitespace": [
      "warn"
    ],
    "no-loss-of-precision": [
      "warn"
    ],
    "no-misleading-character-class": [
      "warn"
    ],
    "no-obj-calls": [
      "warn"
    ],
    "no-promise-executor-return": [
      "warn"
    ],
    "no-prototype-builtins": [
      "warn"
    ],
    "no-regex-spaces": [
      "warn"
    ],
    "no-setter-return": [
      "warn"
    ],
    "no-sparse-arrays": [
      "warn"
    ],
    "no-template-curly-in-string": [
      "warn"
    ],
    "no-unexpected-multiline": [
      "warn"
    ],
    "no-unreachable": [
      "warn"
    ],
    "no-unreachable-loop": [
      "warn",
      {
        "ignore": []
      }
    ],
    "no-unsafe-finally": [
      "warn"
    ],
    "no-unsafe-negation": [
      "warn"
    ],
    "no-unsafe-optional-chaining": [
      "warn",
      {
        "disallowArithmeticOperators": true
      }
    ],
    "no-unused-private-class-members": [
      "warn"
    ],
    "no-useless-backreference": [
      "warn"
    ],
    "no-negated-in-lhs": [
      "warn"
    ],
    "require-atomic-updates": [
      "warn"
    ],
    "use-isnan": [
      "warn"
    ],
    "valid-jsdoc": [
      "warn"
    ],
    "valid-typeof": [
      "warn",
      {
        "requireStringLiterals": true
      }
    ],
    "accessor-pairs": [
      "warn"
    ],
    "array-callback-return": [
      "warn",
      {
        "allowImplicit": true,
        "checkForEach": false
      }
    ],
    "block-scoped-var": [
      "warn"
    ],
    "complexity": [
      "warn",
      20
    ],
    "consistent-return": [
      "warn"
    ],
    "curly": [
      "warn",
      "multi-line"
    ],
    "default-case": [
      "warn",
      {
        "commentPattern": "^no default$"
      }
    ],
    "default-case-last": [
      "warn"
    ],
    "default-param-last": [
      "warn"
    ],
    "dot-notation": [
      "warn",
      {
        "allowKeywords": true,
        "allowPattern": ""
      }
    ],
    "dot-location": [
      "warn",
      "property"
    ],
    "eqeqeq": [
      "warn",
      "always",
      {
        "null": "ignore"
      }
    ],
    "grouped-accessor-pairs": [
      "warn"
    ],
    "guard-for-in": [
      "warn"
    ],
    "max-classes-per-file": [
      "warn",
      1
    ],
    "no-alert": [
      "warn"
    ],
    "no-caller": [
      "warn"
    ],
    "no-case-declarations": [
      "warn"
    ],
    "no-constructor-return": [
      "warn"
    ],
    "no-div-regex": [
      "warn"
    ],
    "no-else-return": [
      "warn",
      {
        "allowElseIf": false
      }
    ],
    "no-empty-function": [
      "warn",
      {
        "allow": [
          "arrowFunctions",
          "functions",
          "methods"
        ]
      }
    ],
    "no-empty-pattern": [
      "warn"
    ],
    "no-eq-null": [
      "warn"
    ],
    "no-eval": [
      "warn"
    ],
    "no-extend-native": [
      "warn"
    ],
    "no-extra-bind": [
      "warn"
    ],
    "no-extra-label": [
      "warn"
    ],
    "no-fallthrough": [
      "warn"
    ],
    "no-floating-decimal": [
      "warn"
    ],
    "no-global-assign": [
      "warn",
      {
        "exceptions": []
      }
    ],
    "no-native-reassign": [
      "warn"
    ],
    "no-implicit-coercion": [
      "warn",
      {
        "boolean": false,
        "number": true,
        "string": true,
        "allow": []
      }
    ],
    "no-implicit-globals": [
      "warn"
    ],
    "no-implied-eval": [
      "warn"
    ],
    "no-invalid-this": [
      "warn"
    ],
    "no-iterator": [
      "warn"
    ],
    "no-labels": [
      "warn",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": [
      "warn"
    ],
    "no-loop-func": [
      "warn"
    ],
    "no-magic-numbers": [
      "warn",
      {
        "ignore": [],
        "ignoreArrayIndexes": true,
        "enforceConst": true,
        "detectObjects": false
      }
    ],
    "no-multi-spaces": [
      "warn",
      {
        "ignoreEOLComments": false
      }
    ],
    "no-multi-str": [
      "warn"
    ],
    "no-new": [
      "warn"
    ],
    "no-new-func": [
      "warn"
    ],
    "no-new-wrappers": [
      "warn"
    ],
    "no-nonoctal-decimal-escape": [
      "warn"
    ],
    "no-octal": [
      "warn"
    ],
    "no-octal-escape": [
      "warn"
    ],
    "no-param-reassign": [
      "warn",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "acc",
          "accumulator",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "$scope",
          "staticContext"
        ]
      }
    ],
    "no-proto": [
      "warn"
    ],
    "no-redeclare": [
      "warn"
    ],
    "no-restricted-properties": [
      "warn",
      {
        "object": "arguments",
        "property": "callee",
        "message": "arguments.callee is deprecated"
      },
      {
        "object": "global",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "self",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "window",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead"
      },
      {
        "object": "global",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "object": "self",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "object": "window",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead"
      },
      {
        "property": "__defineGetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "property": "__defineSetter__",
        "message": "Please use Object.defineProperty instead."
      },
      {
        "object": "Math",
        "property": "pow",
        "message": "Use the exponentiation operator (**) instead."
      }
    ],
    "no-return-assign": [
      "warn",
      "always"
    ],
    "no-return-await": [
      "warn"
    ],
    "no-script-url": [
      "warn"
    ],
    "no-self-assign": [
      "warn",
      {
        "props": true
      }
    ],
    "no-self-compare": [
      "warn"
    ],
    "no-sequences": [
      "warn"
    ],
    "no-throw-literal": [
      "warn"
    ],
    "no-unmodified-loop-condition": [
      "warn"
    ],
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": false,
        "allowTernary": false,
        "allowTaggedTemplates": false,
        "enforceForJSX": false
      }
    ],
    "no-unused-labels": [
      "warn"
    ],
    "no-useless-call": [
      "warn"
    ],
    "no-useless-catch": [
      "warn"
    ],
    "no-useless-concat": [
      "warn"
    ],
    "no-useless-escape": [
      "warn"
    ],
    "no-useless-return": [
      "warn"
    ],
    "no-void": [
      "warn"
    ],
    "no-warning-comments": [
      "warn",
      {
        "terms": [
          "todo",
          "fixme",
          "xxx"
        ],
        "location": "start"
      }
    ],
    "no-with": [
      "warn"
    ],
    "prefer-promise-reject-errors": [
      "warn",
      {
        "allowEmptyReject": true
      }
    ],
    "prefer-named-capture-group": [
      "warn"
    ],
    "prefer-regex-literals": [
      "warn",
      {
        "disallowRedundantWrapping": true
      }
    ],
    "radix": [
      "warn"
    ],
    "require-await": [
      "warn"
    ],
    "require-unicode-regexp": [
      "warn"
    ],
    "vars-on-top": [
      "warn"
    ],
    "wrap-iife": [
      "warn",
      "outside",
      {
        "functionPrototypeMethods": false
      }
    ],
    "yoda": [
      "warn"
    ]
  },
  "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  }
}