import { HomeActions } from '@Actions';
import { ActionConsts } from '@Definations';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home action tests', () => {
    test('Map test', async () => {
        const store = mockStore({
            home: {
                version: 2
            }
        });
        const expectedActions = [
            {
                payload: {
                    home: {
                        version: 2
                    }
                },
                type: ActionConsts.Home.SetReducer
            }
        ];
        await store.dispatch(HomeActions.Map(store.getState()));

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('Reset test', async () => {
        const store = mockStore();
        const expectedActions = [
            {
                type: ActionConsts.Home.ResetReducer
            }
        ];
        await store.dispatch(HomeActions.Reset());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
