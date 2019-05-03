<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <div class="cello-tabContent">
      <div class="row list-item no-gutters active" cello-tabContent="1">
        <xsl:apply-templates select="/ManufacturerList/Manufacturer"></xsl:apply-templates>
      </div>
    </div>
  </xsl:template>

  <xsl:template match="Manufacturer">
    <div class="col-xl-item col-sm-6 col-md-4 col-lg-3 item">
      <div class="top-item">
        <a class="brand-item">
          <xsl:attribute name="href">
            <xsl:value-of select="Url"></xsl:value-of>
          </xsl:attribute>
          <xsl:attribute name="title">
            <xsl:value-of select="Title"></xsl:value-of>
          </xsl:attribute>
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
        </a>
      </div>
    </div>
  </xsl:template>
</xsl:stylesheet>