<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/">
		<div class="filter-title">
			<h2>
				<span>Bộ lọc sản phẩm</span>
				<span class="mdi mdi-menu"></span>
			</h2>
		</div>
		<div class="filter-nav">
			<div class="filter">
			</div>
			<div class="sort sort-filter change-sort">
				<!-- <label>
					<xsl:value-of select="/ProductList/ShortText"></xsl:value-of>
				</label> -->
				<select class="ajaxsort">
					<xsl:apply-templates select="/ProductList/SortBy"></xsl:apply-templates>
				</select>
				</div>
		</div>
		<div class="cello-tabContent ajaxresponse">
			<div class="row list-item no-gutters active ajaxresponsewrap" cello-tabContent="1">
				<xsl:apply-templates select="/ProductList/Product"></xsl:apply-templates>
			</div>
			<xsl:if test="/ProductList/NextPageUrl != ''">
				
			<div class="row list-item no-gutters active ajaxpagination" cello-tabContent="1">
				<div class="col-12">
					<div class="cello-viewMore"><a href="javascript:void(0)">
							<xsl:attribute name="href">
								<xsl:value-of select="/ProductList/NextPageUrl" disable-output-escaping="yes">
								</xsl:value-of>
							</xsl:attribute>
							Xem thêm
						</a>
					</div>
				</div>
			</div>
			</xsl:if>
		</div>
		<script>
			$('.cello-viewMore a').on('click', function (e) {
				e.preventDefault()
				var pageurl = $(this).attr('href')
				$.ajax({
					url: pageurl,
					data: { isajax: true },
					success: function (data) {
						$('.ajaxresponsewrap').append($(data).find('.ajaxresponsewrap').html());
						if ($(data).find('.cello-viewMore a').attr('href') == "") {
							$('.cello-viewMore a').remove()
						} else {
							$('.cello-viewMore a').attr('href', $(data).find('.cello-viewMore a').attr('href'))
						}
					}
				});
			})
		</script>
	</xsl:template>

	<xsl:template match="Product">
		<div class="col-xl-item col-6 col-sm-4 col-lg-3 productItem">
			<xsl:value-of select="EditLink" disable-output-escaping="yes"></xsl:value-of>
			<a >
				<xsl:attribute name="href">
					<xsl:value-of select="Url"></xsl:value-of>
				</xsl:attribute>
				<div class="top-item">
					<div class="img"><img>
						<xsl:attribute name="src">
							<xsl:value-of select="ImageUrl"></xsl:value-of>
						</xsl:attribute>
						<xsl:attribute name="alt">
							<xsl:value-of select="Title"></xsl:value-of>
						</xsl:attribute>
						</img>
					</div>
					<xsl:if test="OldPrice!=0">
						<div class="pro">
							<span>-<xsl:value-of select="Percent" disable-output-escaping="yes"></xsl:value-of>%
							</span>
						</div>
					</xsl:if>
				<xsl:if test="PromotionCatalogText != ''">
						<div class="gift"><em class="fas fa-gift"></em><span>Quà tặng</span></div>
					</xsl:if>
					<xsl:if test="floor(ShowOption div 2) mod 2 = 1">
						<div class="status"><span>New</span></div>
					</xsl:if>
				</div>
				<div class="bottom-item">
					<div class="name">
						<h5>
							<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>
						</h5>
					</div>
					<div class="price">
						<div class="old"><span>
								<xsl:value-of select="OldPrice" disable-output-escaping="yes"></xsl:value-of>
							</span></div>
						<div class="new"><span>
								<xsl:value-of select="Price" disable-output-escaping="yes"></xsl:value-of>
							</span></div>
					</div>
				</div>
				<xsl:if test="PromotionCatalogText != ''">
					<div class="gift-detail">
						<div class="detail-wrapper">
							<div class="detail-title">
								<h5>Quà tặng kèm</h5>
								<div class="detail-close">
									<em class="mdi mdi-close"></em>
								</div>
							</div>
							<div class="detail-info">
								<xsl:value-of select="PromotionCatalogText" disable-output-escaping="yes" />
							</div>
						</div>
					</div>
				</xsl:if>
			</a>
		</div>
	</xsl:template>
		<xsl:template match="SortBy">
		<option>
			<xsl:if test="IsActive='true'">
				<xsl:attribute name="selected">
					<xsl:text>selected</xsl:text>
				</xsl:attribute>
			</xsl:if>
			<xsl:attribute name="value">
				<xsl:value-of select="Url"></xsl:value-of>
			</xsl:attribute>
			<xsl:value-of select="Title"></xsl:value-of>
		</option>
	</xsl:template>
</xsl:stylesheet>
