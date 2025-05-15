const formatVND = (value: number) =>
  new Intl.NumberFormat("vi-VN").format(value);

export default formatVND;
