import Style from "./style";

export default function Slider() {
  return (
    <Style>
      <div>
        <input
          type="range"
          id="my-slider"
          min="0"
          max="100"
          value="50"
          onInput="slider()"
        />
        <div id="slider-value">0</div>
      </div>
    </Style>
  );
}
