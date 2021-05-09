import { createSelector } from '@ngrx/store';
import * as fromUi from '../reducers/ui.reducer';
import { selectUiState } from '../reducers';

export const selectIsSidenavActive = createSelector(
  selectUiState,
  fromUi.selectIsSidenavActive,
);
