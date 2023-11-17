console.log("Init");

const selectors = {
  TabsWrapper: "[page-item=tab-wrapper]",
  PopupTabsWrapper: "[popup-item=tabs-wrapper]",
  CMWrapper: "[filter-type=ceiling-material]",
  WMWrapper: "[filter-type=wall-material]",
  FMWrapper: "[filter-type=flooring-material]",
  ACPWrapper: "[filter-type=acp-material]",
  WDWrapper: "[filter-type=wood-material]",
  CMradioBtnGroupName: "ceiling-material",
  WMradioBtnGroupName: "wall-material",
  FMradioBtnGroupName: "flooring-material",
  ACPRadioGroupName: "acp-material",
  WoodRadioGroupName: "wood-material",
  PageTotal: "[page-item=total]",
  CeilingImgs: "[image-type=cm]",
  WallImages: "[image-type=wm]",
  FloorImages: "[image-type=fm]",
  ACPImages: "[image-type=acpm]",
  WoodImages: "[image-type=wdm]",
  popupForm: "[page-item=popup-form]",
  bookNowBtnTab1: "[page-item=book-now-btn-1]",
  bookNowBtnTab2: "[page-item=book-now-btn-2]",
  resetBtn: "[page-item=reset-btn]",
  resetBtnTab2: "[page-item=resst-tab-2]",
  PageTotal2: "[page-item=total-tab-2]",
  grandTotal: "[popup-item=grand-total]",
  activeRadioBtn: "w--redirected-checked",
  activeTabBtn: "w--current",
  urlInput: 'input[name="product-url"]',
  grandTotalInput: 'input[name="product-total-price"]',
  interiorInput: 'input[name="interior"]',
  exteriorInput: 'input[name="exterior"]',
};

//ref to DOM Nodes
const TabsWrapperEle = document.querySelector(selectors.TabsWrapper);
const PopupTabsEle = document.querySelector(selectors.PopupTabsWrapper);
const CMWrapperEle = document.querySelector(selectors.CMWrapper);
const WMWrapperEle = document.querySelector(selectors.WMWrapper);
const FMWrapperEle = document.querySelector(selectors.FMWrapper);
const ACPWrapperEle = document.querySelector(selectors.ACPWrapper);
const WoodWrapperEle = document.querySelector(selectors.WDWrapper);
const PageTotalEle = document.querySelector(selectors.PageTotal);
const PageTotal2Ele = document.querySelector(selectors.PageTotal2);
const GrandTotalEle = document.querySelector(selectors.grandTotal);
const popupFormEle = document.querySelector(selectors.popupForm);
const bookNowBtn1Ele = document.querySelector(selectors.bookNowBtnTab1);
const bookNowBtn2Ele = document.querySelector(selectors.bookNowBtnTab2);
const resetBtnEle = document.querySelector(selectors.resetBtn);
const resetBtn2Ele = document.querySelector(selectors.resetBtnTab2);
const urlInputEle = document.querySelector(selectors.urlInput);
const grandTotalInputEle = document.querySelector(selectors.grandTotalInput);
const interiorInputEle = document.querySelector(selectors.interiorInput);
const exteriorInput = document.querySelector(selectors.exteriorInput);

//ref to radio button groups
const radioButtonsForCM = document.querySelectorAll(
  `input[name="${selectors.CMradioBtnGroupName}"]`
);
const radioButtonsForWM = document.querySelectorAll(
  `input[name="${selectors.WMradioBtnGroupName}"]`
);
const radioButtonsForFM = document.querySelectorAll(
  `input[name="${selectors.FMradioBtnGroupName}"]`
);
const radioButtonsForACP = document.querySelectorAll(
  `input[name="${selectors.ACPRadioGroupName}"]`
);
const radioButtonsForWood = document.querySelectorAll(
  `input[name="${selectors.WoodRadioGroupName}"]`
);
const allRadioButtons = document.querySelectorAll("input[type=radio]");

//ref to image nodes
const allCMImages = document.querySelectorAll(selectors.CeilingImgs);
const allWMImages = document.querySelectorAll(selectors.WallImages);
const allFMImages = document.querySelectorAll(selectors.FloorImages);
const allACPImages = document.querySelectorAll(selectors.ACPImages);
const allWoodImages = document.querySelectorAll(selectors.WoodImages);

//Initial Global State
let FinalValuesForInteriors = {
  cm: {
    value: "",
    price: "",
  },
  wm: {
    value: "",
    price: "",
  },
  fm: {
    value: "",
    price: "",
  },
};

let FinalValuesForExterior = {
  acpm: {
    value: "",
    price: "",
  },
  wdm: {
    value: "",
    price: "",
  },
};

//`click` event handlers for radio button groups
CMWrapperEle.addEventListener("click", (e) => {
  e.stopPropagation();
  // console.log("radio buttons::", radioButtonsForCM);
  let selectedCWMaterial = {
    value: "",
    price: "",
  };
  for (const radioButton of radioButtonsForCM) {
    if (radioButton.checked) {
      selectedCWMaterial.value = radioButton.dataset.value;
      selectedCWMaterial.price = radioButton.dataset.price;
      break;
    }
  }
  //console.log("CM ::", selectedCWMaterial);
  FinalValuesForInteriors.cm = selectedCWMaterial;
  updateImageByType("cm", selectedCWMaterial.value);
  updatePageTotal();
  updateQueryParams();
});

WMWrapperEle.addEventListener("click", (e) => {
  e.stopPropagation();
  // console.log("radio buttons::", radioButtonsForWM);
  let selectedCWMaterial = {
    value: "",
    price: "",
  };
  for (const radioButton of radioButtonsForWM) {
    if (radioButton.checked) {
      selectedCWMaterial["value"] = radioButton.dataset.value;
      selectedCWMaterial["price"] = radioButton.dataset.price;
      break;
    }
  }
  // console.log("WM ::", selectedCWMaterial);
  FinalValuesForInteriors.wm = selectedCWMaterial;
  updateImageByType("wm", selectedCWMaterial.value);
  updatePageTotal();
  updateQueryParams();
});

FMWrapperEle.addEventListener("click", (e) => {
  e.stopPropagation();
  // console.log("radio buttons::", radioButtonsForFM);
  let selectedCWMaterial = {
    value: "",
    price: "",
  };
  for (const radioButton of radioButtonsForFM) {
    if (radioButton.checked) {
      selectedCWMaterial["value"] = radioButton.dataset.value;
      selectedCWMaterial["price"] = radioButton.dataset.price;
      break;
    }
  }
  // console.log("FM ::", selectedCWMaterial);
  FinalValuesForInteriors.fm = selectedCWMaterial;
  updateImageByType("fm", selectedCWMaterial.value);
  updatePageTotal();
  updateQueryParams();
});

ACPWrapperEle.addEventListener("click", (e) => {
  e.stopPropagation();
  let selectedCWMaterial = {
    value: "",
    price: "",
  };
  for (const radioButton of radioButtonsForACP) {
    if (radioButton.checked) {
      selectedCWMaterial["value"] = radioButton.dataset.value;
      selectedCWMaterial["price"] = radioButton.dataset.price;
      break;
    }
  }
  // console.log("FM ::", selectedCWMaterial);
  FinalValuesForExterior.acpm = selectedCWMaterial;
  updateImageByType("acpm", selectedCWMaterial.value);
  updatePageTotal2();
  updateQueryParams();
});

WoodWrapperEle.addEventListener("click", (e) => {
  e.stopPropagation();
  let selectedCWMaterial = {
    value: "",
    price: "",
  };
  for (const radioButton of radioButtonsForWood) {
    if (radioButton.checked) {
      selectedCWMaterial["value"] = radioButton.dataset.value;
      selectedCWMaterial["price"] = radioButton.dataset.price;
      break;
    }
  }
  // console.log("FM ::", selectedCWMaterial);
  FinalValuesForExterior.wdm = selectedCWMaterial;
  updateImageByType("wdm", selectedCWMaterial.value);
  updatePageTotal2();
  updateQueryParams();
});
console.log("Final values ::", {
  FinalValuesForInteriors,
  FinalValuesForExterior,
});

const updatePageTotal = () => {
  let sum = 0;
  if (FinalValuesForInteriors.cm.price !== "") {
    sum += parseFloat(FinalValuesForInteriors.cm.price);
  }
  if (FinalValuesForInteriors.wm.price !== "") {
    sum += parseFloat(FinalValuesForInteriors.wm.price);
  }
  if (FinalValuesForInteriors.fm.price !== "") {
    sum += parseFloat(FinalValuesForInteriors.fm.price);
  }
  /*  if (FinalValuesForExterior.acpm.price !== "") {
    sum += parseFloat(FinalValuesForExterior.acpm.price);
  }
  if (FinalValuesForExterior.wdm.price !== "") {
    sum += parseFloat(FinalValuesForExterior.wdm.price);
  } */

  PageTotalEle.innerText = sum?.toFixed(2);
  return sum;
};

const updatePageTotal2 = () => {
  let sum = 0;
  if (FinalValuesForExterior.acpm.price !== "") {
    sum += parseFloat(FinalValuesForExterior.acpm.price);
  }
  if (FinalValuesForExterior.wdm.price !== "") {
    sum += parseFloat(FinalValuesForExterior.wdm.price);
  }
  PageTotal2Ele.innerText = sum?.toFixed(2);
  return sum;
};

const updateQueryParams = () => {
  const newUrl = new URL(window.location.href);
  if (FinalValuesForInteriors.cm.value !== "") {
    newUrl.searchParams.set("cm", FinalValuesForInteriors.cm.value);
  }
  if (FinalValuesForInteriors.wm.value !== "") {
    newUrl.searchParams.set("wm", FinalValuesForInteriors.wm.value);
  }
  if (FinalValuesForInteriors.fm.value !== "") {
    newUrl.searchParams.set("fm", FinalValuesForInteriors.fm.value);
  }
  if (FinalValuesForExterior.acpm.value !== "") {
    newUrl.searchParams.set("acpm", FinalValuesForExterior.acpm.value);
  }
  if (FinalValuesForExterior.wdm.value !== "") {
    newUrl.searchParams.set("wdm", FinalValuesForExterior.wdm.value);
  }
  window.history.pushState(null, null, newUrl);
};

const resetQueryParams = (tab = 1) => {
  const baseUrl = window.location.href.split("?")[0];
  let updatedUrl = baseUrl;
  const oldUrl = new URL(window.location.href);
  const params = new URLSearchParams(oldUrl.search);
  if (tab === 1) {
    params.delete("cm");
    params.delete("wm");
    params.delete("fm");
  }
  if (tab === 2) {
    params.delete("acpm");
    params.delete("wdm");
  }

  if (params) {
    updatedUrl += `?${params}`;
  }

  const newUrl = new URL(updatedUrl);
  window.history.pushState(null, null, newUrl);
};

const updateImageByType = (type = "cm", materialValue) => {
  if (type === "cm") {
    for (let image of allCMImages) {
      const imageMaterialValue = image.dataset.materialValue;

      image.style.opacity = "0";
      if (imageMaterialValue === materialValue) {
        //update ceiling image opacity
        //console.log(">>>> Found Ceiling Image ::", image.src);
        image.style.opacity = "1";
      }
    }
  }

  if (type === "wm") {
    for (let image of allWMImages) {
      const imageMaterialValue = image.dataset.materialValue;
      image.style.opacity = "0";
      if (imageMaterialValue === materialValue) {
        //update wall image opacity
        // console.log(">>>> Found Wall Image ::", image.src);
        image.style.opacity = "1";
      }
    }
  }

  if (type === "fm") {
    for (let image of allFMImages) {
      const imageMaterialValue = image.dataset.materialValue;
      image.style.opacity = "0";
      if (imageMaterialValue === materialValue) {
        //update floor image opacity
        //console.log(">>>> Found Floor Image ::", image.src);
        image.style.opacity = "1";
      }
    }
  }

  if (type === "acpm") {
    for (let image of allACPImages) {
      const imageMaterialValue = image.dataset.materialValue;
      image.style.opacity = "0";
      if (imageMaterialValue === materialValue) {
        //update floor image opacity
        //console.log(">>>> Found Floor Image ::", image.src);
        image.style.opacity = "1";
      }
    }
  }

  if (type === "wdm") {
    for (let image of allWoodImages) {
      const imageMaterialValue = image.dataset.materialValue;
      image.style.opacity = "0";
      if (imageMaterialValue === materialValue) {
        //update floor image opacity
        //console.log(">>>> Found Floor Image ::", image.src);
        image.style.opacity = "1";
      }
    }
  }
};

const resetImageStylesOnTab1 = () => {
  [...allCMImages, ...allWMImages, ...allFMImages].forEach(
    (image) => (image.style.opacity = "0")
  );
  /* allWMImages.forEach((image) => (image.style.opacity = "0"));
  allFMImages.forEach((image) => (image.style.opacity = "0")); */
};

const resetImageStylesOnTab2 = () => {
  [...allACPImages, ...allWoodImages].forEach(
    (image) => (image.style.opacity = "0")
  );
};

const resetRadioButtons = () => {
  allRadioButtons.forEach((radioButton) => {
    radioButton.checked = false;
    radioButton.previousSibling.classList.remove(selectors.activeRadioBtn);
  });
};

const resetRadioButtonsOnTab1 = () => {
  [...radioButtonsForCM, ...radioButtonsForWM, ...radioButtonsForFM].forEach(
    (radioButton) => {
      radioButton.checked = false;
      radioButton.previousSibling.classList.remove(selectors.activeRadioBtn);
    }
  );
};

const resetRadioButtonsOnTab2 = () => {
  [...radioButtonsForACP, ...radioButtonsForWood].forEach((radioButton) => {
    radioButton.checked = false;
    radioButton.previousSibling.classList.remove(selectors.activeRadioBtn);
  });
};

const resetFinalStateValues = () => {
  FinalValuesForInteriors = {
    cm: {
      value: "",
      price: "",
    },
    wm: {
      value: "",
      price: "",
    },
    fm: {
      value: "",
      price: "",
    },
  };
};

const resetFinalStateValues2 = () => {
  FinalValuesForExterior = {
    acpm: {
      value: "",
      price: "",
    },
    wdm: {
      value: "",
      price: "",
    },
  };
};

const updateAppState = (cmValue, wmValue, fmValue, acpmValue, wdmValue) => {
  if (cmValue) {
    radioButtonsForCM.forEach((radioButton) => {
      const value = radioButton.dataset.value;
      const price = radioButton.dataset.price;
      if (value === cmValue) {
        radioButton.checked = true;
        radioButton.previousSibling.classList.add(selectors.activeRadioBtn);

        updateImageByType("cm", cmValue);
        FinalValuesForInteriors.cm = { value, price };
      }
    });
  }

  if (wmValue) {
    radioButtonsForWM.forEach((radioButton) => {
      const value = radioButton.dataset.value;
      const price = radioButton.dataset.price;
      if (value === wmValue) {
        radioButton.checked = true;
        radioButton.previousSibling.classList.add(selectors.activeRadioBtn);

        updateImageByType("wm", wmValue);
        FinalValuesForInteriors.wm = { value, price };
      }
    });
  }

  if (fmValue) {
    radioButtonsForFM.forEach((radioButton) => {
      const value = radioButton.dataset.value;
      const price = radioButton.dataset.price;
      if (value === fmValue) {
        radioButton.checked = true;
        radioButton.previousSibling.classList.add(selectors.activeRadioBtn);

        updateImageByType("fm", fmValue);
        FinalValuesForInteriors.fm = { value, price };
      }
    });
  }

  if (acpmValue) {
    radioButtonsForACP.forEach((radioButton) => {
      const value = radioButton.dataset.value;
      const price = radioButton.dataset.price;
      if (value === acpmValue) {
        radioButton.checked = true;
        radioButton.previousSibling.classList.add(selectors.activeRadioBtn);

        updateImageByType("acpm", acpmValue);
        FinalValuesForExterior.acpm = { value, price };
      }
    });
  }

  if (wdmValue) {
    radioButtonsForWood.forEach((radioButton) => {
      const value = radioButton.dataset.value;
      const price = radioButton.dataset.price;
      if (value === wdmValue) {
        radioButton.checked = true;
        radioButton.previousSibling.classList.add(selectors.activeRadioBtn);

        updateImageByType("wdm", wdmValue);
        FinalValuesForExterior.wdm = { value, price };
      }
    });
  }

  updatePageTotal();
  updatePageTotal2();
};

const updateGrandTotalNHiddenInputs = () => {
  const grandTotal = updatePageTotal() + updatePageTotal2();
  GrandTotalEle.innerText = grandTotal?.toFixed(2);
  grandTotalInputEle.value = grandTotal?.toFixed(2);
  //update url with params
  urlInputEle.value = window.location.href;
  const { cm, fm, wm } = FinalValuesForInteriors;
  const { acpm, wdm } = FinalValuesForExterior;
  interiorInputEle.value = `${cm.value}-${wm.value}-${fm.value}`;
  exteriorInput.value = `${acpm.value}-${wdm.value}`;
};

const displayPopupForm = () => {
  updateGrandTotalNHiddenInputs();
  popupFormEle.style.display = "block";
};

TabsWrapperEle.addEventListener("click", (e) => {
  const currentTab = e.target.innerText;
  // const pageAEles = document.querySelectorAll(`${selectors.TabsWrapper} > a`);
  const popupAEles = document.querySelectorAll(
    `${selectors.PopupTabsWrapper} > a`
  );

  popupAEles.forEach((aEle) => {
    //  console.log("alele", aEle.dataset.wTab?.toUpperCase());
    if (aEle.dataset.wTab?.toUpperCase() === currentTab) {
      aEle.classList.toggle(selectors.activeTabBtn);
      aEle.setAttribute("aria-selected", true);
    }
  });
});

PopupTabsEle.addEventListener("click", (e) => {
  //console.log("popup", e.target.innerText);
  const currentTab = e.target.innerText;
  const pageAEles = document.querySelectorAll(`${selectors.TabsWrapper} > a`);
  /*  const popupAEles = document.querySelectorAll(
    `${selectors.PopupTabsWrapper} > a`
  ); */
  //console.log("popup a", pageAEles);
  pageAEles.forEach((aEle) => {
    if (aEle.dataset.wTab?.toUpperCase() === currentTab)
      aEle.classList.toggle(selectors.activeTabBtn);
    aEle.setAttribute("aria-selected", true);
  });
});

// book now button
bookNowBtn1Ele.addEventListener("click", displayPopupForm);
bookNowBtn2Ele.addEventListener("click", displayPopupForm);

//reset  btn click
resetBtnEle.addEventListener("click", (e) => {
  resetImageStylesOnTab1();
  resetQueryParams(1);
  resetRadioButtonsOnTab1();
  resetFinalStateValues();
  updatePageTotal();
});

//Todo seperate out reseting radio btn, query params, image Styles
resetBtn2Ele.addEventListener("click", (e) => {
  resetImageStylesOnTab2();
  resetQueryParams(2);
  resetRadioButtonsOnTab2();
  resetFinalStateValues2();
  updatePageTotal2();
});

//on page load
window.addEventListener("load", (ev) => {
  const url = new URL(window.location.href);
  const cmParamValue = url.searchParams.get("cm");
  const wmParamValue = url.searchParams.get("wm");
  const fmParamValue = url.searchParams.get("fm");
  const acpmParamValue = url.searchParams.get("acpm");
  const wdmParamValue = url.searchParams.get("wdm");

  //update the opacity accordingly
  updateAppState(
    cmParamValue,
    wmParamValue,
    fmParamValue,
    acpmParamValue,
    wdmParamValue
  );

  //opacity zero if no params exists
  if (
    !cmParamValue &&
    !wmParamValue &&
    !fmParamValue &&
    !acpmParamValue &&
    !wdmParamValue
  ) {
    resetImageStylesOnTab1();
    resetImageStylesOnTab2();
  }
});
