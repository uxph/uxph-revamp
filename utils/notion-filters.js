export const eventFilter = {
  filter: {
    and: [
      {
        property: "status",
        select: {
          equals: "Published",
        },
      },
    ],
    or: [
      {
        property: "id",
        number: {
          is_not_empty: true,
        },
      },
      {
        property: "name",
        title: {
          is_not_empty: true,
        },
      },
      {
        property: "eventDate",
        date: {
          is_not_empty: true,
        },
      },
      {
        property: "time",
        text: {
          is_not_empty: true,
        },
      },
      {
        property: "venue",
        text: {
          is_not_empty: true,
        },
      },
      {
        property: "imageSquare",
        files: {
          is_not_empty: true,
        },
      },
    ],
  },
  sorts: [
    {
      property: "eventDate",
      direction: "descending",
    },
  ],
};
