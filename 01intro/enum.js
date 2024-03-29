//kind of a restricted choice
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    //now it will follow that like middle will have 11 now (only for number as it is auto calculate)
    //if u put string , u have to write for all
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
//if string is put u have to put for all unlike the num(can be mix)
var SeatChoice1;
(function (SeatChoice1) {
    SeatChoice1["AISLE"] = "aa";
    SeatChoice1["MIDDLE"] = "bb";
    SeatChoice1[SeatChoice1["WINDOW"] = 3] = "WINDOW";
})(SeatChoice1 || (SeatChoice1 = {}));
var seat = SeatChoice.WINDOW;
