import Inputmask from "inputmask";

export function inputmask () {

  Inputmask(
    {
      mask: "+(375) 999-99-99",
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: true
    }
  ).mask('#tel');

}

