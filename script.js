	var videos = [
		{
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"id": 675465,
			"title": "Fracture"
		},
		{
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"id": 654356453,
			"title": "Bad Boys"
		}
	];

	// Expecting this output...
	// [
	//     {
	//         "65432445": "The Chamber",
	//         "675465": "Fracture",
	//         "70111470": "Die Hard",
	//         "654356453": "Bad Boys"
	//     }
	// ]
  var reducedVids = videos.reduce((prev, curr) => {
  var ids = curr.id;
  var titles = curr.title;
  prev[ids] = titles;
  return prev;
},{});

console.log([reducedVids]);

