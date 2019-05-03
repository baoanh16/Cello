<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />
	<xsl:template match="/">
		<div class="cello-title">
			<h2>
				<xsl:value-of select="/ProductList/ModuleTitle" disable-output-escaping="yes"></xsl:value-of>
			</h2>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<xsl:apply-templates select="/ProductList/Product"></xsl:apply-templates>

			</div>
		</div>

		<xsl:if test="count(/ProductList/Product) >0">
			<div class="swiper-nav">
				<div class="swiper-prev"><em class="lnr lnr-chevron-left"></em></div>
				<div class="swiper-next"><em class="lnr lnr-chevron-right"></em></div>
			</div>
		</xsl:if>
	</xsl:template>
	
	<xsl:template match="Product">
		<div class="swiper-slide">
			<div class="productItem">
				<div class="top-item">
					<a>
						<xsl:attribute name="href">
							<xsl:value-of select="Url"></xsl:value-of>
						</xsl:attribute>
					<div class="img"><img>
						<xsl:attribute name="src">
							<xsl:value-of select="ImageUrl"></xsl:value-of>
						</xsl:attribute>
						<xsl:attribute name="alt">
							<xsl:value-of select="Title"></xsl:value-of>
						</xsl:attribute>
						</img>
					</div>
					<xsl:if test="Percent != ''">
						<div class="pro"><span>-<xsl:value-of select="Percent" disable-output-escaping="yes">
								</xsl:value-of>%</span></div>
					</xsl:if>
					<xsl:if test="PromotionCatalogText != ''">
						<div class="gift"><em class="fas fa-gift"></em><span>Quà tặng</span></div>
					</xsl:if>
					<div class="status"><span>New</span></div>
					<div class="time">
						<p>Còn lại <span class="num">24</span><b>:</b><span class="num">30</span><b>:</b><span
								class="num">50</span></p>
					</div>
					</a>
				</div>
				<div class="bottom-item">
					<a>
						<xsl:attribute name="href">
							<xsl:value-of select="Url"></xsl:value-of>
						</xsl:attribute>
					<!-- <div class="color">
						<div class="color-item active" style="background: #000000"></div>
						<div class="color-item" style="background: #ff3c00"></div>
						<div class="color-item" style="background: #cccccc"></div>
					</div> -->
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
					</a>
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
				<!-- <div class="buy-now">
					<a href="javascript:void(0)" onclick="AjaxCart.addproducttocart_catalog(this);return false;">
						<xsl:attribute name="data-productid">
							<xsl:value-of select="ProductId"></xsl:value-of>
						</xsl:attribute>
						<em class="mdi mdi-cart-outline"></em>
						<span>MUA NGAY</span>
					</a>
				</div> -->
			</div>
		</div>
	</xsl:template>
</xsl:stylesheet>
