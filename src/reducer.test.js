/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * DO NOT MODIFY THIS FILE
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import reducer from "./store/reducer";

const SHOW_CAGE = "SHOW_CAGE";
const HIDE_CAGE = "HIDE_CAGE";

const SHOW_NEW_ANIMAL_FORM = "SHOW_NEW_ANIMAL_FORM";
const HIDE_NEW_ANIMAL_FORM = "HIDE_NEW_ANIMAL_FORM";
const ADD_ANIMAL = "ADD_ANIMAL";

const initialState = {
  animals: [
    {
      name: "Tiger",
      emoji: "🐅",
    },
    {
      name: "Elephant",
      emoji: "🐘",
    },
    {
      name: "Gorilla",
      emoji: "🦍",
    },
  ],
  cageAnimal: null,
  showCage: false,
  showNewAnimalForm: false,
};

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SHOW_CAGE", () => {
    expect(
      reducer(initialState, {
        type: SHOW_CAGE,
        payload: { animal: { name: "Hasan", emoji: "🦍" }, showCage: true },
      })
    ).toEqual({
      ...initialState,
      showCage: true,
      cageAnimal: { name: "Hasan", emoji: "🦍" },
    });
  });

  it("should handle HIDE_CAGE", () => {
    expect(
      reducer(
        {
          ...initialState,
          showCage: true,
          cageAnimal: { name: "Hasan", emoji: "🦍" },
        },
        {
          type: HIDE_CAGE,
        }
      )
    ).toEqual(initialState);
  });

  it("should handle SHOW_NEW_ANIMAL_FORM", () => {
    expect(
      reducer(initialState, {
        type: SHOW_NEW_ANIMAL_FORM,
      })
    ).toEqual({
      ...initialState,
      showNewAnimalForm: true,
    });
  });

  it("should handle HIDE_NEW_ANIMAL_FORM", () => {
    expect(
      reducer(
        {
          ...initialState,
          showNewAnimalForm: true,
        },
        {
          type: HIDE_NEW_ANIMAL_FORM,
        }
      )
    ).toEqual(initialState);
  });

  it("should handle ADD_ANIMAL", () => {
    expect(
      reducer(initialState, {
        type: ADD_ANIMAL,
        payload: { animal: { name: "Hasan", emoji: "🦍" } },
      })
    ).toEqual({
      ...initialState,
      animals: [...initialState.animals, { name: "Hasan", emoji: "🦍" }],
    });
  });
});
