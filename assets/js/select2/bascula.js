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
        }else if($id_select_tipo_mov == 2){
            var sampleArray = [
                        {id:0,text:'Ventas'},
                        {id:1,text:'Consumo'},
                        {id:2,text:'Salida por Merma'}];
            $("#concepto_movimiento").select2({ data: sampleArray });	
        }
    }); 
}