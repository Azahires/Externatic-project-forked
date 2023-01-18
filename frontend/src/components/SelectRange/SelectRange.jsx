import Style from "./style";

export default function Slider () {
  return (
    <Style>
      <div>
      <input type="range" id="my-slider" min="0" max="100" value="50" oninput="slider()"></input>
        <div id="slider-value">0</div>
      valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    sliderValue.textContent = mySlider.value;}
      </div>
    </Style>
  );
}
