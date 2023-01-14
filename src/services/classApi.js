export const selectionClass = (language) => {
  if (language == "english") {
    return {
      ms_1: "magin-left1",
      ms_2: "magin-left2",
      ms_3: "magin-left3",
      ms_4: "magin-left4",
      ms_5: "magin-left5",
      //
      me_1: "magin-right1",
      me_2: "magin-right2",
      me_3: "magin-right3",
      me_4: "magin-right4",
      me_5: "magin-right5",
    };
  }

  if (language == "persion") {
    return {
      ms_1: "magin-right1",
      ms_2: "magin-right2",
      ms_3: "magin-right3",
      ms_4: "magin-right4",
      ms_5: "magin-right5",
      //
      me_1: "magin-left1",
      me_2: "magin-left2",
      me_3: "magin-left3",
      me_4: "magin-left4",
      me_5: "magin-left5",
    };
  }
};
