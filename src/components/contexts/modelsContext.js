import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { ACTIONS, JSON_API_MODELS } from "../helpers/consts";
import { useLocation, useNavigate } from "react-router-dom";

export const modelsContext = createContext();

export const useModels = () => {
  return useContext(modelsContext);
};

const INIT_STATE = {
  models: [],
  oneModel: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_MODELS:
      return { ...state, models: action.payload };
    case ACTIONS.GET_ONE_MODEL:
      return { ...state, oneModel: action.payload };
    default:
      return state;
  }
};

const ModelsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  const getModels = async () => {
    try {
      let { data } = await axios.get(
        `${JSON_API_MODELS}${window.location.search}`
      );
      let action = {
        type: ACTIONS.GET_MODELS,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteModel = async (id) => {
    try {
      await axios.delete(`${JSON_API_MODELS}/${id}`);
      getModels();
    } catch (error) {
      console.log(error);
    }
  };

  const addModel = async (newModel) => {
    try {
      await axios.post(JSON_API_MODELS, newModel);
      getModels();
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedModel = async (id, newModel) => {
    try {
      await axios.patch(`${JSON_API_MODELS}/${id}`, newModel);
      getModels();
    } catch (error) {
      console.log(error);
    }
  };

  const getOneModel = async (id) => {
    try {
      const { data } = await axios(`${JSON_API_MODELS}/${id}`);
      let action = {
        type: ACTIONS.GET_ONE_MODEL,
        payload: data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const editOneModel = async (id, newobj) => {
    try {
      const { data } = await axios.patch(`${JSON_API_MODELS}/${id}`, newobj);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value == "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  let values = {
    deleteModel,
    addModel,
    saveEditedModel,
    getOneModel,
    editOneModel,
    fetchByParams,
    getModels,
    models: state.models,
    oneModel: state.oneModel,
  };
  return (
    <modelsContext.Provider value={values}>{children}</modelsContext.Provider>
  );
};

export default ModelsContextProvider;
