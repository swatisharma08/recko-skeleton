import * as inquirer from 'inquirer';
import { DefinationsModel } from './Defination';
import { Config, Helper } from './helper';

export const pageComp = {
	showQuestions: async (): Promise<void> => {
		const questions = [
			{
				message: 'Enter class based component name',
				name: 'fileName',
				type: 'input',
				validate(val: string): string | boolean {
					if (val.length) {
						if (
							Helper.isAlreadyExist(
								Config.pagesDir,
								val
							)
						) {
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

		const answers: DefinationsModel.IAnswers = await inquirer.prompt<{ fileName: string, isHaveStyle: boolean, isHaveReducer:
			   boolean, isConnectStore: boolean,  isHavePath: boolean, routePath: string }>(questions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());
		answers.isPage = true;
		Helper.createClassComponent(answers);

		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}
		if (answers.isHaveReducer) {
/* 			Helper.addReducer(answers); */
		}
		if (answers.isHavePath) {
			Helper.addRoute(answers);
		}
	}
};
