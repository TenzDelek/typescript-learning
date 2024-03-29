//kind of a restricted choice

enum SeatChoice {
  AISLE = 10, //default the value given from 0 if u overwrite it with your own
  //now it will follow that like middle will have 11 now (only for number as it is auto calculate)
  //if u put string , u have to write for all
  MIDDLE,
  WINDOW,
}
//if string is put u have to put for all unlike the num(can be mix)
enum SeatChoice1 {
  AISLE = "aa",
  MIDDLE = "bb",
  WINDOW = 3,
}
const seat = SeatChoice.WINDOW;
