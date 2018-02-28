/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_415da8097a984455a4b38764986e1e8f(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_415da8097a984455a4b38764986e1e8f.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_MultiValueDropdown_Body.js';
  ctx['DisplayTemplateData']['TemplateType']='Filter';
  ctx['DisplayTemplateData']['TargetControlType']=['Refinement'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['CompatibleSearchDataTypes']=[];
  ctx['DisplayTemplateData']['CompatibleManagedProperties']=[];

ms_outHtml.push('',''
);
			var propertyName = ctx.RefinementControl["csr_propertyName"];
			var displayTitle = ctx.RefinementControl["csr_displayTitle"];
			var filters = ctx.RefinementControl["csr_filters"];
			var isExpanded = Boolean(ctx.RefinementControl["csr_isExpanded"]);
			var renderEmptyContainer = Boolean(ctx.RefinementControl["csr_renderEmptyContainer"]);
			var useContains = Boolean(ctx.RefinementControl["csr_useContains"]);
			var useKQL = Boolean(ctx.RefinementControl["csr_useKQL"]);
			var showCounts = Boolean(ctx.RefinementControl["csr_showCounts"]);

			if($isEmptyString(propertyName) || (!$isNull(renderEmptyContainer) && renderEmptyContainer))
			{ 
		ms_outHtml.push(''
,'		<div id="EmptyContainer"></div>'
);
			} 
			else if(!$isNull(filters) && Srch.U.isArray(filters) && !$isEmptyArray(filters))
			{ 
				var expandedStatus = !$isNull(isExpanded) ? isExpanded : true;
				var iconClass = "ms-core-listMenu-item ";
				iconClass += expandedStatus ? "ms-ref-uparrow" : "ms-ref-downarrow";
		ms_outHtml.push(''
,'		<div id="Container">'
,'			', Srch.U.collapsibleRefinerTitle(propertyName, ctx.ClientControl.get_id(), displayTitle, iconClass) ,''
,'			<div class="ms-ref-unselSec" id="UnselectedSection">'
,'				<div id="unselShortList" class="ms-ref-unsel-shortList">'
,'					<select id="', propertyName ,'Select" style="width: 200px" multiple="multiple">'
); 
							for (var i = 0; i < filters.length; i++){
								var filter = filters[i];
								if(!$isNull(filter)){
									var isSelected = Boolean(filter.IsSelected);
									var inputName = propertyName + '_ChkGroup';
									var inputId = inputName + "_" + filter.RefinementName;
									var nameClass = "ms-ref-name " + (showCounts ? "ms-displayInline" : "ms-displayInlineBlock ms-ref-ellipsis");
									var token = filter.RefinementToken.substr(filter.RefinementToken.indexOf("\"") + 1);
									token = token.substr(0, token.lastIndexOf("\""));
									if(isSelected) {
						ms_outHtml.push(''
,'						<option id="', $htmlEncode(inputId) ,'" name="', $htmlEncode(inputName) ,'" value="', $htmlEncode(token) ,'" selected="selected">'
,'						', $htmlEncode(filter.RefinementName) ,''
,'						<span id="RefinementCount" class="ms-ref-count ms-textSmall"> (', $htmlEncode(Srch.U.toFormattedNumber(filter.RefinementCount)) ,') </span>'
,'						</option>'
);
									} else {
						ms_outHtml.push(''
,'						<option id="', $htmlEncode(inputId) ,'" name="', $htmlEncode(inputName) ,'" value="', $htmlEncode(token) ,'">'
,'						', $htmlEncode(filter.RefinementName) ,''
,'						<span id="RefinementCount" class="ms-ref-count ms-textSmall"> (', $htmlEncode(Srch.U.toFormattedNumber(filter.RefinementCount)) ,') </span>'
,'						</option>'
);
									}
								}
							}
						ms_outHtml.push(''
,'					</select>'
,'				</div>'
,'			</div>'
,'		</div>'
);
			} 
		ms_outHtml.push('						'
,'	'
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_415da8097a984455a4b38764986e1e8f() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Filter_MultiValueDropdown_Body", DisplayTemplate_415da8097a984455a4b38764986e1e8f);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_MultiValueDropdown_Body.js", DisplayTemplate_415da8097a984455a4b38764986e1e8f);
}

}
RegisterTemplate_415da8097a984455a4b38764986e1e8f();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fFilters\u002fFilter_MultiValueDropdown_Body.js"), RegisterTemplate_415da8097a984455a4b38764986e1e8f);
}