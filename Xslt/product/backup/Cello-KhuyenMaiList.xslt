<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />
	<xsl:template match="/">
		<div class="row no-gutters">
			<xsl:apply-templates select="/ProductList/Product"></xsl:apply-templates>
		</div>
	</xsl:template>
	<xsl:template match="Product">
		<div class="col-xl-item col-sm-6 col-md-4 col-lg-3 productItem">
			<a >
				<xsl:attribute name="href">
					<xsl:value-of select="Url"></xsl:value-of>
				</xsl:attribute>
				<div class="top-item">
					<div class="img">
						<img>
						<xsl:attribute name="src">
							<xsl:value-of select="ImageUrl"></xsl:value-of>
						</xsl:attribute>
						<xsl:attribute name="alt">
							<xsl:value-of select="Title"></xsl:value-of>
						</xsl:attribute>
						</img>
					</div>
					<xsl:if test="OldPrice != ''">
						
					<div class="pro">
						<span>
							<!-- <xsl:value-of select="round((1-substring(Price,0,string-length(Price)-2) div substring(OldPrice,0,string-length(OldPrice)-2)) * 100)" />% -->
							-<xsl:value-of select="Percent" disable-output-escaping="yes"></xsl:value-of>%
						</span>
					</div>
					</xsl:if>
				<xsl:if test="PromotionCatalogText != ''">
						<div class="gift"><em class="fas fa-gift"></em><span>
								<!-- <xsl:value-of select="ShowOption" disable-output-escaping="yes"></xsl:value-of> -->
								Quà tặng
							</span></div>
					</xsl:if>

					<xsl:if test="floor(ShowOption div 4) mod 2 = 1">
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
						<xsl:if test="OldPrice != ''">
							<div class="old">
								<span>
									<xsl:value-of select="OldPrice" disable-output-escaping="yes">
									</xsl:value-of>
								</span>
							</div>
						</xsl:if>
						<xsl:if test="Price != ''">
							<div class="new">
								<span>
									<xsl:value-of select="Price" disable-output-escaping="yes">
									</xsl:value-of>
								</span>
							</div>
						</xsl:if>
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
</xsl:stylesheet>
