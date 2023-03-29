var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["UNAUTHENTICATED"] = 1] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 2] = "FORBIDDEN";
    RType[RType["FAILURE"] = 3] = "FAILURE";
})(RType || (RType = {}));
export const response = {
    status: 200,
    type: RType.SUCCESS,
    data: "Test",
};
