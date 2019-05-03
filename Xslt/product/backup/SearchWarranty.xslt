<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
	<xsl:output method="html" indent="yes" />

	<xsl:template match="/">
		<div class="search-results">
			<h4>Kết quả tra cứu</h4>
			<xsl:apply-templates select="/OrderList/Order"></xsl:apply-templates>
		</div>
	</xsl:template>
	<xsl:template match="Order">
		<div class="result-wrapper">
			<div class="info table">
				<div class="tr">
					<span class="fieldname">Tên khách hàng</span>
					<span class="value">
						<xsl:value-of select="FirstName" />
					</span>
				</div>
				<div class="tr">
					<span class="fieldname">Số điện thoại</span>
					<span class="value">
						<xsl:value-of select="Phone" />
					</span>
				</div>
			</div>
			<xsl:apply-templates select="Product" />
			<!-- <div class="product table">
			</div> -->
		</div>
	</xsl:template>

	<xsl:template match="Product">
		<div class="product table">
		<div class="tr">
			<span class="fieldname">Sản phẩm</span>
			<span class="value">
				<xsl:value-of select="Title"></xsl:value-of>
			</span>
		</div>
		<div class="tr">
			<span class="fieldname">Số Seri</span>
			<span class="value">
				<xsl:value-of select="Code"></xsl:value-of>
			</span>
		</div>
		<div class="tr">
			<span class="fieldname">Ngày Mua</span>
			<span class="value">25/01/2018</span>
		</div>
		<div class="tr">
			<span class="fieldname">Số Seri</span>
			<span class="value">25/02/2019</span>
		</div>
	</div>
	</xsl:template>
</xsl:stylesheet>
