import { state, selectCategory, save, reset } from "./state.js";
import { render } from "./dom.js";

export function bindFilter() {
  const filterRow = document.querySelector("#filter");
  filterRow.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) return;
    selectCategory(button.dataset.category);
    save();
    render(state);
  });
}

export function bindReset() {
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener("click", function () {
    reset();
    render(state);
  });
}

export function bindForm() {
  const form = document.querySelector("#character-form");
  const submitButton = form.querySelector("button[type='submit']");

  const fields = [
    {
      input: document.querySelector("#character-name"),
      error: document.querySelector("#character-name-error"),
      message: "Enter the character name, for example Violet Evergarden.",
    },
    {
      input: document.querySelector("#distinguishing-features"),
      error: document.querySelector("#distinguishing-features-error"),
      message: "Describe the character, for example kind and loyal.",
    },
    {
      input: document.querySelector("#position"),
      error: document.querySelector("#position-error"),
      message: "Enter the position, for example Auto Memory Doll.",
    },
  ];

  function validateField(field) {
    const valid = field.input.value.trim() !== "";
    field.error.textContent = valid ? "" : field.message;
    if (valid) {
      field.input.removeAttribute("aria-invalid");
    } else {
      field.input.setAttribute("aria-invalid", "true");
    }
    return valid;
  }

  function allFieldsValid() {
    return fields.every((field) => field.input.value.trim() !== "");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const results = fields.map(validateField);
    const valid = results.every(Boolean);
    submitButton.disabled = !valid;

    if (!valid) {
      fields.find((field) => !validateField(field)).input.focus();
      return;
    }

    console.log("Form valid");
    form.reset();
  });

  form.addEventListener("input", (event) => {
    const field = fields.find((item) => item.input === event.target);
    if (!field) return;
    validateField(field);
    submitButton.disabled = !allFieldsValid();
  });
}