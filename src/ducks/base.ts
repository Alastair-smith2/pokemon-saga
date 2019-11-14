interface GenericEntity<T> {
  byId: {
    [key: string]: T;
  };
  allIds: number[];
}

export const deleteEntity = <K, T extends GenericEntity<K>>(
  id: number,
  state: T
): T => {
  const newState = {
    ...state,
    allIds: state.allIds.filter(newid => newid !== id)
  };
  delete newState.byId[`${id}`];
  return newState;
};

export const addEntity = <K extends { id: number }, T extends GenericEntity<K>>(
  entity: K,
  state: T
): T => {
  return {
    ...state,
    byId: {
      ...state.byId,
      [entity.id]: entity
    },
    allIds: [...state.allIds, entity.id]
  };
};
