/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_9ba0258d8b6648e4badec19d83a0fa70(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_9ba0258d8b6648e4badec19d83a0fa70.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_MultiValueDropdown.js';
  ctx['DisplayTemplateData']['TemplateType']='Filter';
  ctx['DisplayTemplateData']['TargetControlType']=['Refinement'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['CompatibleSearchDataTypes']=[];
  ctx['DisplayTemplateData']['CompatibleManagedProperties']=[];

ms_outHtml.push('',''
);
var Options = {
    ShowCounts: false
};

var listData = ctx.ListData;
var hasControl = !$isNull(ctx.RefinementControl) && !$isNull(ctx.ClientControl);

if(hasControl) {
    var hasNoListData = ($isEmptyArray(listData));

    var propertyName = ctx.RefinementControl.propertyName;
    var displayTitle = Srch.Refinement.getRefinementTitle(ctx.RefinementControl);
    var isExpanded = Srch.Refinement.getExpanded(ctx.RefinementControl.propertyName);
    var useContains = false;
    var useKQL = false;
    var refiners = [];

    var currentRefinementCategory = ctx.ClientControl.getCurrentRefinementCategory(ctx.RefinementControl.propertyName);
    var hasAnyFilterTokens = (!$isNull(currentRefinementCategory) && currentRefinementCategory.get_tokenCount() > 0);
    var renderEmptyContainer = hasControl && (hasNoListData && !hasAnyFilterTokens);
    if(!renderEmptyContainer) {
        var listDataTokenToDisplayMap = {};
        var listDataTokenToCountMap = {};
        if(!hasNoListData) {
            for (var i = 0; i < listData.length; i++) {
                var filter = listData[i];
                if(!$isNull(filter)) {
                    listDataTokenToDisplayMap[filter.RefinementToken] = filter.RefinementName;
                    listDataTokenToCountMap[filter.RefinementToken] = filter.RefinementCount;
                    if(!hasAnyFilterTokens && !$isEmptyString(filter.RefinementName) && !$isEmptyString(filter.RefinementToken)) {
                        refiners.push(
                        {   
                            RefinementName: filter.RefinementName,
                            RefinementToken: filter.RefinementToken,
                            RefinementCount: filter.RefinementCount,
                            IsSelected: false
                        });
                    }
                }
            }
        }
        if(hasAnyFilterTokens) {
            for(var j = 0; j < currentRefinementCategory.get_tokenCount(); j++) {
                var token = currentRefinementCategory.t[j];
                var displayValue = listDataTokenToDisplayMap[token];
                if($isEmptyString(displayValue) && !$isNull(currentRefinementCategory.m)) {
                    displayValue = currentRefinementCategory.m[token];
                }
                if(!$isEmptyString(displayValue) && !$isEmptyString(token))
                {
                    refiners.push(
                    {   
                        RefinementName: displayValue,
                        RefinementToken: token,
                        RefinementCount: !$isNull(listDataTokenToCountMap[token]) ? listDataTokenToCountMap[token] : 0,
                        IsSelected: true
                    });
                }
            }
        }
    }
    ctx["DisplayTemplateData"]["BodyTemplateId"] = "~sitecollection/_catalogs/masterpage/Display Templates/Filters/Filter_MultiValueDropdown_Body.js";
    ctx.RefinementControl["csr_propertyName"] = propertyName;
    ctx.RefinementControl["csr_displayTitle"] = displayTitle;
    ctx.RefinementControl["csr_filters"] = refiners;
    ctx.RefinementControl["csr_isExpanded"] = isExpanded;
    ctx.RefinementControl["csr_renderEmptyContainer"] = renderEmptyContainer;
    ctx.RefinementControl["csr_useContains"] = useContains;
    ctx.RefinementControl["csr_useKQL"] = useKQL;
    ctx.RefinementControl["csr_showCounts"] = Options.ShowCounts;
	
ms_outHtml.push(''
,'        ', ctx.RenderBody(ctx) ,''
);
}

	ctx.OnPostRender = [];
	ctx.OnPostRender.push(function () {		
	$(window).load(function() {
	    jQuery("select").multiselect("refresh");
		
		
		});
 
		jQuery(document).ready(function() {
		
		jQuery("#s4-workspace").scroll(function (event) {
		if(jQuery('.ui-multiselect-menu.ui-widget.ui-widget-content.ui-corner-all').length)
		{

		jQuery('.ui-multiselect-menu.ui-widget.ui-widget-content.ui-corner-all').each(function( index ) {

		if(jQuery(this).is(":visible"))
			{
			jQuery(this).find('a.ui-multiselect-close').click();
			}
			});
			}
            });
			
		
			//Get Checked
			var thisvariable;
			jQuery("#" + propertyName + "Select").multiselect({
				selectedList: 10,
				close: function() { 
					var refinement = {};
					refinement[ctx.RefinementControl.propertyName] = [];
					var thisvariable = this; 
					jQuery("#" + propertyName + "Select").multiselect("getChecked").each(function() {
						refinement[ctx.RefinementControl.propertyName].push('"' + $(this).val() + '"');
	                     
					});
					if (refinement[ctx.RefinementControl.propertyName].length == 0) {
						delete refinement[ctx.RefinementControl.propertyName];
					}
					$getClientControl(this).updateRefinersJSON('{"' + ctx.RefinementControl.propertyName + '":null}');
					$getClientControl(this).addRefinementFiltersJSONWithOr(JSON.stringify(refinement));
					
					//push a single refinement on ducment ready
					jQuery("#" + "FileType" + "Select").multiselect("getLabels").find("input[value='ǂǂ786c7378']").click();
					var refinement = {};
					refinement["FileType"] = [];
					var value = "ǂǂ786c7378";
					refinement["FileType"].push('"' + value + '"');
					$getClientControl(this).addRefinementFiltersJSONWithOr(JSON.stringify(refinement));
				}
			});
			
			if (!hasAnyFilterTokens)
			{
				jQuery("#" + propertyName + "Select").multiselect("uncheckAll");
				debugger;
				
			  }
			jQuery("#" + propertyName + "Select").multiselect().multiselectfilter();
			jQuery("#" + propertyName + "Select").multiselect();
			jQuery("button.ui-multiselect").css("min-width", "380px");
			jQuery(".ui-multiselect-menu").css("min-width", "372px");
		});
		jQuery(".ms-ref-refinername").css("width", "100%");
		
	});

ms_outHtml.push(''
);
   var array_of_checked_values = [];
   AddPostRenderCallback(ctx, function(){
   //jQuery("#" + "FileType" + "Select").multiselect("getLabels").find("input[value='ǂǂ786c7378']").click();
   //jQuery("#" + "DisplayAuthor" + "Select").multiselect("getLabels").find("input[value='ǂǂ53636f7474205275626c65']").click();
   jQuery("select").multiselect("refresh");
   jQuery(this).find('a.ui-multiselect-close').click();
   jQuery("select").multiselectfilter("updateCache");
   jQuery("select").triggerHandler("multiselectclick");
   var values = $("#" + "DisplayAuthor" + "Select").val();
   debugger;
   var array_of_checked_values = [];
				var array_of_checked_values = $("#" + "DisplayAuthor" + "Select").multiselect("getChecked").map(function(){
				   return this.value;    
				}).get();				
   });
ms_outHtml.push(''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_9ba0258d8b6648e4badec19d83a0fa70() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Filter_MultiValueDropdown", DisplayTemplate_9ba0258d8b6648e4badec19d83a0fa70);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_MultiValueDropdown.js", DisplayTemplate_9ba0258d8b6648e4badec19d83a0fa70);
}
//
    //$includeCSS("", "~sitecollection/Style%20Library/Jquery/jquery-ui.min.css");
	$includeCSS("", "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css");
	//$includeCSS("", "~sitecollection/Style%20Library/Jquery/jquery.multiselect.filter.css");
    $includeCSS("", "~sitecollection/Style%20Library/Jquery/jquery.multiselect.css");
    $includeScript("", "~sitecollection/Style%20Library/Jquery/jquery.multiselect.filter.min.js");
	//$includeScript("", "~sitecollection/Style%20Library/Jquery/jquery-ui.min.js");
	//$includeScript("", "~sitecollection/Style%20Library/Jquery/jquery.min.js");
	
    $includeScript("", "https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-multiselect-widget/2.0.1/jquery.multiselect.js");
    $includeScript("", "~sitecollection/_catalogs/masterpage/Display Templates/Filters/Filter_MultiValueDropdown_Body.js");
    


    
   	
   	//$includeScript("", "~sitecollection/Style%20Library/Jquery/jquery.multi-select.min.js");
//
}
RegisterTemplate_9ba0258d8b6648e4badec19d83a0fa70();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_MultiValueDropdown.js"), RegisterTemplate_9ba0258d8b6648e4badec19d83a0fa70);
}