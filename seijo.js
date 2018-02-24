var dataSet = [];
var startLink = "<a href = 'https://www.shinkunovels.com/active/seijo-no-kaifuku/chapter-";
var midLink = "'>";
var endLink = "</a>";

//this is it
var title = [];
title[68] = "Shall We Dance……?";
title[69] = "Ah, Yes";
title[70] = "Let’s Give Up Already";
title[71] = "I Don't Want to Bid a Farewell to Lily";
title[72] = "This Is How Elderly Is";
title[73] = "It’s Something Bouncy";
title[74] = "As Expected, She Is a Child But She Is a Demon";
title[75] = "I Pushed Lily";
title[76] = "Unknown Ceiling";
title[77] = "I-It’s Wonderful";
title[78] = "I Gently Closed The Door";
title[79] = "As Expected From a Princess";
title[80] = "Try To Think Carefully";
title[81] = "My Selfish Conviction";
title[82] = "That Was Irrelevant In Front Of Love";
title[83] = "I'm Sure I Will Cry";
title[84] = "What I Need To Do";
title[85] = "Please Give me More Sake";
title[86] = "I Don’t Want To Let Her Go";
title[87] = "I Will Go See Him Now";
title[88] = "It Seems It was Just My Misunderstanding";
title[89] = "You Deserve A Praise";
title[90] = "It’s A Little Strange";
title[91] = "It’s a Recovery Magic, Is There Something Wrong?";
title[92] = "I Never Saw It Before";
title[93] = "It’s Not Fun At All";
title[94] = "Enough, Get Out Of My Way";
title[95] = "Please Give Me Your Daughter";
title[96] = "No Matter How Serious I Used My Power, It’s Still Weaker Than Lily's";
title[97] = "Inside The Room";
title[98] = "I’ll Give You One";
title[99] = "Please Throw Me Up Into the Sky";
title[100] = "The Tree Branch Is The Same As Usual";
title[101] = "Will He not Coming Again Today?";
title[102] = "I Will Leave Early";


//creating dataset for datatable
for(var i = 68; i < title.length; i++)
{
	var tmp = [i.toString(), startLink + i + midLink + title[i] + endLink];
	dataSet.push(tmp);
}

//group based the chapter number
var groups = [];
groups[68] = "Volume 2: No Matter How I See, My Real Power Is Inferior to Lily's Power";
groups[97] = "Chapter 3: No Matter How I See The Saint’s Recovery Magic, It’s a Deteriorated Version of Mine";
groups[141] = "Chapter 4";

//datatable initialization
$(document).ready(function(){
	$('#dtSeijo').DataTable({
		"data": dataSet,
		"ordering": false,
		"searching": false,
		"drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last=null;
			
			//iteration through every data
            api.column(0, {page:'current'} ).data().each( function ( group, i ) {
				//adding group for each first row for each page
				if(i == 0)
				{
					for(var j = this.page.info().page * this.page.info().length + 68; j > -1; j--) //iterating from current value downward, looking for nearest group
					//+68 is required because we're starting this series from ch 68
					{
						if(groups[j] !== undefined) //group exists
						{
							$(rows).eq( i ).before(
								'<tr class="group"><td colspan = 2>' + groups[j] + '</td></tr>');
								console.log(); //adding the row group
							break; //we're done adding group
						}
						
					}
				}
				//adding group for non first row for each page
				else
				{
					if(groups[i + this.page.info().page * this.page.info().length + 68] !== undefined) //group exists
					{
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan = 2>' + groups[i + this.page.info().page * this.page.info().length + 68] + '</td></tr>'); //adding the row group
					}
				}
            } );
        }
	});
});