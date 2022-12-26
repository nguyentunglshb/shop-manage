import dayjs from "dayjs";

export const formatDDMMMYYYY = (dateString: string) => {
  return dayjs(dateString).format("DD/MM/YYYY");
};
