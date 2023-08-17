/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const names = {
  pronoun: ["the", "our", "your", "my"],
  adj: ["special", "marvellous", "funny", "attractive"],
  noun: ["room", "stage", "presence", "trip"],
  ending: ["com", "es", "net", "us"]
};

window.onload = function() {
  let examples = document.querySelector("#list");
  let result = "";

  for (let pronoun of names.pronoun) {
    for (let adj of names.adj) {
      for (let noun of names.noun) {
        for (let ending of names.ending) {
          const combination = pronoun + adj + noun + "." + ending;
          result += "<li>" + combination + "</li>";
        }
      }
    }
  }
  examples.innerHTML = result;
};
