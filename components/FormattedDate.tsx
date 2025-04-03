"use client";
import React from "react";
import dayjs from "dayjs";

type Props = {
  date: Date;
  formatTemplate: string;
};

const FormattedDate = (props: Props) => {
  return <span>{dayjs(props.date).format(props.formatTemplate)}</span>;
};

export default FormattedDate;
