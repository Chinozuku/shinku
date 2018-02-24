var dataSet = [ [
      "Illustration",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/kein-good-deed/keins-good-deed-illustration/'>Illustration</a>"
    ],[
      "Chapter 1",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/prologue/'>Prologue</a>"
    ],[
      "Chapter 2",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-2/'>A Sudden Invitation From the S Rank Party</a>"
    ], [
      "Chapter 3",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-3/'>Why didn’t he come!?</a>"
    ], [
      "Chapter 4",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-4/'>There Are More Monsters On The Mountain Recently</a>"
    ], [
      "Chapter 5",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-5/'>Why Nobody Noticed It!?</a>"
    ], [
      "Chapter 6",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-6/'>Kein is Saving an Orphanage</a>"
    ], [
      "Chapter 7",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-7/'>Orphanage Children</a>"
    ], [
      "Chapter 8",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-8/'>They’re suspicious!</a>"
    ], [
      "Chapter 9",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-9/'>Sephilia’s Confession</a>"
    ], [
      "Chapter 10",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-10/'>What on Earth Are You Thinking! </a>"
    ]
  ];

$(document).ready(function(){
	$('#dtKein').DataTable({
		"data": dataSet,
		"ordering": false,
		"searching": false
	});
});