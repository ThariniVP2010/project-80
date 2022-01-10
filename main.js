var guest_list_array = [];
var guest_list_array_updated = [];

function enter()
{
    var guest_name = document.getElementById("input_name").value;
    var guest_name_update = guest_name + "<br></br>";
            console.log(guest_name);
            guest_list_array.push(guest_name);
            guest_list_array_updated.push(guest_name_update);
            document.getElementById("div_2").innerHTML = guest_list_array ;
}

function show()
{
    remove_comma = (guest_list_array_updated.join(' '));
    document.getElementById("guest_list_v1").innerHTML = remove_comma ;
}

function sort()
{
    var guest_list_array_updated2 = guest_list_array_updated.sort();
    guest_list_array_updated2 = (guest_list_array.join(' '));
    console.log(guest_list_array_updated2)
    document.getElementById("sorted_list").innerHTML = guest_list_array_updated2 ;
}

function search()
{
    var search_item = document.getElementById("input_search").value;
    guest_list_array_updated2.find(search_item);
    document.write(search_item);
}