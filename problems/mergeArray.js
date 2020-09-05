var data1 = [
  {
    ID: 1,
    FirstName: "Sally",
  },
  {
    ID: 2,
    FirstName: "Jim",
  },
  {
    ID: 3,
    FirstName: "Bob",
  }
];

var data2 = [
  {
    ID: 2,
    FirstName: "Jim",
  },
  {
    ID: 4,
    FirstName: "Tom",
  },
  {
    ID: 5,
    FirstName: "George",
  },
  {
    ID: 3,
    FirstName: "Bob",
  },
];

data1.filter(da => data2.find(da2 => da2.ID == da.ID));
