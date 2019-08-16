$(function(){

	$('#next').bind('click', function(){

		var num = Math.floor(Math.random() * 61 + 1);

		$.ajax({
			type:'POST',
			url:'https://swapi.co/api/planets/'+num,
			dataType:'json',
			beforeSend: function(){
			  $("#carregando").show("slow");
			},
			complete: function(){
			  $("#carregando").hide("slow");
			},
			success:function(json) {
				console.log(json);
				$('.tela').find('h2.planet-name').html(json.name);
				$('.tela').find('p.population').html('POPULATION: '+json.population);
				$('.tela').find('p.climate').html('CLIMATE: '+json.climate);
				$('.tela').find('p.terrain').html('TERRAIN: '+json.terrain);
				$('.tela').find('p.films').html('FEATURED IN '+json.films.length+' FILMS');
			},
			error:function() {
				alert("Deu algum problema...");
			}
		})

	});
});