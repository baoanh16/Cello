<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <xsl:if test="count(/FeedList/Feed ) > 0 ">
    <section class="home-facebook">
      <h2 class="home-title">
        <xsl:value-of select="/FeedList/ModuleTitle" disable-output-escaping="yes"></xsl:value-of>
      </h2>
      <div class="facebook-wrap">
        <div class="fb-list">
          <xsl:apply-templates select="/FeedList/Feed"></xsl:apply-templates>
        </div>
      </div>
      <div class="btn-wrap">
        <a class="btn-viewall" rel="nofollow" href="https://www.facebook.com/Techzones.vn/" target="_blank">Xem thêm</a>
      </div>
    </section>
  </xsl:if>
  </xsl:template>

  <xsl:template match="Feed">
    <div class="item">
      <a target="_blank" class="fb-item">
        <xsl:attribute name="href">
          <xsl:value-of select="Url"></xsl:value-of>
        </xsl:attribute>
        <figure>
          <div class="fb-img">
            <img>
              <xsl:attribute name="alt">
                <xsl:value-of select="Title"></xsl:value-of>
              </xsl:attribute>
              <xsl:attribute name="src">
                <xsl:value-of select="FullPicture"></xsl:value-of>
              </xsl:attribute>
            </img>
          </div>
          <figcaption>
            <time>
              <xsl:value-of select="CreatedTime" disable-output-escaping="yes"></xsl:value-of>
            </time>
            <div class="fb-des">
              <xsl:value-of select="Message" disable-output-escaping="yes"></xsl:value-of>
            </div>
          </figcaption>
        </figure>
      </a>
    </div>
  </xsl:template>
</xsl:stylesheet>
