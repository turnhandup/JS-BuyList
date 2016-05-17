$(function(){
    var ITEM=$(".line").html();
    var $textfield=$(".productNameField");
    var $addbutton=$(".addButton");
    var $list=$(".product-list");
    
    var $leftList=$(".leftList");
    var leftItem=$(".leftLabelWrapper").html();
    
    var $buyedList=$(".buyedList");
    function addItem(name){
        
        var $node=$(ITEM);
        var $increase=$node.find(".increase");
        var $decrease=$node.find(".decrease");
        var $notbuyed=$node.find(".notBuyed");
        var $buyed=$node.find(".buyed");
        var $delete=$node.find(".cancel");
        var $title=$node.find(".productName");
        var $productNameInput=$node.find(".productNameInput");
        
        var $leftItemCurrent=$(leftItem);
        var $leftAmount=$leftItemCurrent.find(".leftAmount");
        var $leftName=$leftItemCurrent.find(".leftName");

        
        $title.text(name);
        
        $leftAmount.text(1);
        $leftName.prepend(name);
     
        
        $delete.click(function(){
            $node.remove();
            $leftItemCurrent.remove();
        });
        
        $list.append($node);
        $leftList.append($leftItemCurrent);
        
    
     $increase.click(function(){
        var $amount=$node.find(".currentAmount");
        var $amountInt=parseInt($amount.text()); 
        $amountInt++;
        $amount.text($amountInt);
        $leftAmount.text($amount.text());
        if($amount.text()>1){
            $decrease.removeClass("disabledDecrease");
        }
    });
    $decrease.click(function(){
        var $amount=$node.find(".currentAmount");
        var $amountInt=parseInt($amount.text()); 
        $amountInt--;
        $amount.text($amountInt);
        $leftAmount.text($amount.text());
        if($amount.text()==1){
            $decrease.addClass("disabledDecrease");
        }
    });
    $buyed.click(function(){
        $title.addClass("productNameBuyed");
        $increase.addClass("increaseBuyed");
        $decrease.addClass("decreaseBuyed");
        $delete.addClass("cancelBuyed");
        $buyed.addClass("buyedBuyed");
        $notbuyed.removeClass("notBuyed");
        $notbuyed.addClass("buyed");
        $buyedList.append($leftItemCurrent);
        $notbuyed.click(function(){
            $title.removeClass("productNameBuyed");
            $increase.removeClass("increaseBuyed");
            $decrease.removeClass("decreaseBuyed");
            $delete.removeClass("cancelBuyed");
            $buyed.removeClass("buyedBuyed");
            $notbuyed.addClass("notBuyed");
            $notbuyed.removeClass("buyed");
            $leftList.prepend($leftItemCurrent);
        });
    });
    
    $title.click(function(){
        if(!$title.hasClass("productNameBuyed")){
        $title.hide();
        $productNameInput.val($title.text()).show();
        $productNameInput.focus();
        $productNameInput.focusout(function(){
             $productNameInput.hide();
             $title.text($productNameInput.val()).show();
         });
        }
    });
    $productNameInput.on("input", function(){
       $title.text($productNameInput.val());
       $leftName.text($productNameInput.val());
       $leftList.append($leftItemCurrent);
    });
    }
    $addbutton.click(function(event){
        event.preventDefault();
        addItem($textfield.val());
        $textfield.val("");
        $textfield.focus();
    });
    
    
    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");
   
});