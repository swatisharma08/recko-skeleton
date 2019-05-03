"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const helper_1 = require("./helper");
exports.pageComp = {
    showQuestions: () => __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                message: 'Enter class based component name',
                name: 'fileName',
                type: 'input',
                validate(val) {
                    if (val.length) {
                        if (helper_1.Helper.isAlreadyExist(helper_1.Config.pagesDir, val)) {
                            return 'Already added use new compoment name';
                        }
                        return true;
                    }
                    return 'Cannot be empty';
                }
            },
            {
                choices: [
                    new inquirer.Separator(),
                    {
                        name: 'Yes, new I want to use special path?',
                        value: true
                    },
                    {
                        name: 'No, use default.',
                        value: false
                    }
                ],
                message: 'Do you want to add special route path or use default?',
                name: 'isHavePath',
                type: 'list'
            },
            {
                message: 'Enter route path',
                name: 'routePath',
                type: 'input',
                when: ({ isHavePath }) => isHavePath
            },
            {
                default: false,
                message: 'Do you want to connect store',
                name: 'isConnectStore',
                type: 'confirm'
            },
            {
                choices: [
                    new inquirer.Separator(),
                    {
                        name: 'Yes, I want to have new reducer.',
                        value: true
                    },
                    {
                        name: 'No, do not create a new reducer.',
                        value: false
                    }
                ],
                message: 'Do you want to create a new reducer or use your own ?',
                name: 'isHaveReducer',
                type: 'list',
                when: ({ isConnectStore }) => isConnectStore
            },
            {
                default: true,
                message: 'Do you want styles file',
                name: 'isHaveStyle',
                type: 'confirm'
            }
        ];
        const answers = yield inquirer.prompt(questions);
        answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
        answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());
        answers.isPage = true;
        helper_1.Helper.createClassComponent(answers);
        if (answers.isHaveStyle) {
            helper_1.Helper.createStyle(answers);
        }
        if (answers.isHaveReducer) {
            /* 			Helper.addReducer(answers); */
        }
        if (answers.isHavePath) {
            helper_1.Helper.addRoute(answers);
        }
    })
};
//# sourceMappingURL=page-component.js.map