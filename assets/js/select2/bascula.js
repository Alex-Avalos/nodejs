jQuery(document).ready(function($){
  $("#div_row_cliente").hide();
  $("#div_row_proveedor").hide();
  $("#div_row_proveedor").hide();
  $("#div_row_peso_lugar_origen").hide();
  $("#div_row_info_vehiculo").hide();
  $("#div_row_nom_chofer").hide();
});

function mostra_div(){ 
  jQuery(document).ready(function($){
    $("#div_row_proveedor").show();
    $("#div_row_proveedor").show();
    $("#div_row_peso_lugar_origen").show();
    $("#div_row_info_vehiculo").show();
    $("#div_row_nom_chofer").show();
  });
}
function mov(){   
    jQuery(document).ready(function($){
        $id_select_tipo_mov=$("#tipo_de_movimiento").select2('val');
        $("#concepto_movimiento").empty().trigger('change')
        if ($id_select_tipo_mov == 1) {
            var sampleArray = [
                        {id:0,text:'Compra'},
                        {id:1,text:'Devolucion'},
                        {id:2,text:'Rendimiento'},
                        {id:3,text:'Entrada Por Merma'},
                        {id:4,text:'Traspaso'}];
            $("#concepto_movimiento").select2({ data: sampleArray });
            $("#div_row_proveedor").show();
            $("#div_row_peso_lugar_origen").show();
            $("#div_row_info_vehiculo").show();
            $("#div_row_nom_chofer").show();
        }else if($id_select_tipo_mov == 2){
            $("#div_row_proveedor").hide();
            $("#div_row_cliente").show();
            var sampleArray = [
                        {id:0,text:'Ventas'},
                        {id:1,text:'Consumo'},
                        {id:2,text:'Salida por Merma'},
                        {id:3,text:'Alimento Terminado'}];
            $("#concepto_movimiento").select2({ data: sampleArray });	
        }else if($id_select_tipo_mov == 3){
          var sampleArray = [
                      {id:0,text:'Centro de Distribuccion'}];
          $("#concepto_movimiento").select2({ data: sampleArray });	
      }
    }); 
}

function con_mov(){   
    jQuery(document).ready(function($){
        $id_select_concepto_mov=$("#concepto_movimiento").select2('val');
        if ($id_select_concepto_mov == 3) {
          var sampleArray = [
            {id:0,text:'Orden de Compra'},
            {id:1,text:'Remision'},
            {id:2,text:'Ticket'},
            {id:3,text:'Factura'},
            {id:4,text:'Contrato'},
            {id:5,text:'Traspaso'},
            {id:6,text:'Inventario Inicial'}];
          $("#tipo_de_documento").select2({ data: sampleArray });
          $("#tipo_de_documento").val('2');
          $('#tipo_de_documento').trigger('change');
      }else{
        $("#tipo_de_documento").empty().trigger('change')
          var sampleArray = [
                      {id:0,text:'Orden de Compra'},
                      {id:1,text:'Remision'},
                      {id:2,text:'Ticket'},
                      {id:3,text:'Factura'},
                      {id:4,text:'Contrato'},
                      {id:5,text:'Traspaso'},
                      {id:6,text:'Inventario Inicial'}];
        $("#tipo_de_documento").select2({ data: sampleArray });
      }	
    }); 
}