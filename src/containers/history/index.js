import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { HistoryWrapper, HistoryItem } from './components';
import { historySelector, currentItemSelector } from './selectors';
import { loadSnapshot } from './actions';

export let History = () => {
    const history = useSelector(historySelector);
    const currentItem = useSelector(currentItemSelector);

    const dispatch = useDispatch();
    const goToSnapshot = (moveNumber, snapshot) =>
        dispatch(loadSnapshot(moveNumber, snapshot));

    return (
        <HistoryWrapper>
            {history.map((historyItem) => (
                <HistoryItem
                    key={`history-item-${historyItem.get('moveNumber')}`}
                    moveNumber={historyItem.get('moveNumber')}
                    emph={currentItem === historyItem.get('moveNumber')}
                    player={historyItem.get('snapshot').get('currentPlayer')}
                    onClick={() =>
                        goToSnapshot(
                            historyItem.get('moveNumber'),
                            historyItem.get('snapshot')
                        )
                    }
                />
            ))}
        </HistoryWrapper>
    );
};
