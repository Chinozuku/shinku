var dataSet = [];
var startLink = "<a href = 'https://www.shinkunovels.com/the-hidden-dungeon-only-i-can-enter/chapter-";
var midLink = "'>";
var endLink = "</a>";

//this is it
var title = [];
title[15] = "School Life is Starting";


//creating dataset for datatable
for(var i = 15; i < title.length; i++)
{
	var tmp = [i.toString(), startLink + i + midLink + title[i] + endLink];
	dataSet.push(tmp);
}

//group based the chapter number
var groups = [];
groups[15] = "Chapter 1";
groups[28] = "Chapter 2";
groups[59] = "Chapter 3";

//datatable initialization
$(document).ready(function(){
	$('#dtHidden').DataTable({
		"data": dataSet,
		"ordering": false,
		"searching": false,
		"drawCallback": function ( settings ) {
            var api = this.api();
            var rows = api.rows( {page:'current'} ).nodes();
            var last = null;
			
			//iteration through every data
            api.column(0, {page:'current'} ).data().each( function ( group, i ) {
				//adding group for each first row for each page
				if(i == 0)
				{
					for(var j = this.page.info().page * this.page.info().length + 15; j > -1; j--) //iterating from current value downward, looking for nearest group
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
					if(groups[i + this.page.info().page * this.page.info().length + 15] !== undefined) //group exists
					{
						$(rows).eq( i ).before(
							'<tr class="group"><td colspan = 2>' + groups[i + this.page.info().page * this.page.info().length + 15] + '</td></tr>'); //adding the row group
					}
				}
            } );
        }
	});
});