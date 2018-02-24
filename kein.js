var dataSet = [ [
      "Illustration",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/kein-good-deed/keins-good-deed-illustration/'>Illustration</a>"
    ],[
      "1",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/prologue/'>Prologue</a>"
    ],[
      "2",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-2/'>A Sudden Invitation From the S Rank Party</a>"
    ], [
      "3",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-3/'>Why didn’t he come!?</a>"
    ], [
      "4",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-4/'>There Are More Monsters On The Mountain Recently</a>"
    ], [
      "5",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-5/'>Why Nobody Noticed It!?</a>"
    ], [
      "6",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-6/'>Kein is Saving an Orphanage</a>"
    ], [
      "7",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-7/'>Orphanage Children</a>"
    ], [
      "8",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-8/'>They’re suspicious!</a>"
    ], [
      "9",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-9/'>Sephilia’s Confession</a>"
    ], [
      "10",
      "<a class = 'Kein' href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-10/'>What on Earth Are You Thinking! </a>"
    ]
  ];
  
var dataSet = [];
var startLink = "<a href = 'https://www.shinkunovels.com/active/kein-good-deed/chapter-";
var midLink = "'>";
var endLink = "</a>";

//this is it
var title = [];
title[0] = "Illustration";
title[1] = "Prologue";
title[2] = "A Sudden Invitation From the S Rank Party";
title[3] = "Why didn’t he come!?";
title[4] = "There Are More Monsters On The Mountain Recently";
title[5] = "Why Nobody Noticed It!?";
title[6] = "Kein is Saving an Orphanage";
title[7] = "Orphanage Children";
title[8] = "They’re suspicious!";
title[9] = "Sephilia’s Confession";
title[10] = "What on Earth Are You Thinking!";


//creating dataset for datatable
for(var i = 0; i < title.length; i++)
{
	var tmp = [];
	if(i == 0) tmp = ['Illustration', "<a href = 'https://www.shinkunovels.com/kein-good-deed/keins-good-deed-illustration/'>Illustration</a>"];
	else if (i == 1) tmp = [i.toString(), "<a href = 'https://www.shinkunovels.com/active/kein-good-deed/prologue/'>Prologue</a>"];
	else tmp = [i.toString(), startLink + i + midLink + title[i] + endLink];
	dataSet.push(tmp);
}
  
  
  
var groups = [];
groups[0] = "Add-on";
groups[1] = "Part 1 Chapter 1 「Sword Princess Anastrea」";
groups[6] = "Chapter 2 「Saint Sephilia」";
groups[21] = "Chapter 3 「Witch Maya」";
groups[42] = "Part 2 Chapter 1 「Living at Someone's House」";
groups[53] = "Chapter 2 「Living With Familiar」";

$(document).ready(function(){
	$('#dtKein').DataTable({
		"data": dataSet,
		"ordering": false,
		"searching": false,
		"drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;
 
            api.column(0, {page:'current'} ).data().each( function ( group, i ) {
				if(i == 0)
				{
					for(var j = this.page.info().page * this.page.info().length; j > -1; j--)
					{
						if(groups[j] !== undefined) 
						{
							$(rows).eq( i ).before(
								'<tr class="group"><td colspan = 2>' + groups[j] + '</td></tr>');
								console.log();
							break;
						}
						
					}
				}
				else
				{
					if(groups[i + this.page.info().page * this.page.info().length] !== undefined)
					{
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan = 2>' + groups[i + this.page.info().page * this.page.info().length] + '</td></tr>');
					}
				}
            } );
        }
	});
});