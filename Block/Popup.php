<?php
/**
 * Promotion banner on popup and in cart
 *
 * @package Konatsu_PromoBanner
 * @author Robert Rupa <robert@konatsu.pl>
 * @license OSL-3.0, AFL-3.0
 */
namespace Konatsu\PromoBanner\Block;

class Popup extends \Konatsu\PromoBanner\Helper\Helper
{
    protected const CONFIG_PATH = "promo_baner/popup";
    protected const FILE_PATH = "konatsu/promobanner/";

    public function getBaner(){
        $mediaUrl = $this->storeManagerInterface->getStore()->getBaseUrl(\Magento\Framework\UrlInterface::URL_TYPE_MEDIA );
        $mediaUrl.= $this::FILE_PATH;
        $this->imgAlt = $this->getProperty($this::CONFIG_PATH.'/img_alt');
        $this->imgSrcDesktop = $mediaUrl.$this->getProperty($this::CONFIG_PATH.'/img_src');
        $this->imgSrcMobile = $mediaUrl.$this->getProperty($this::CONFIG_PATH.'/img_src_mobile');
        return $this;
    }
}
