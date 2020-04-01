package cn.itsource.domain;

public class Collect {
	private int id;
	private String img_url;
	private String describe;
	private int price;
	private int hot;
	
	
	public int getHot() {
		return hot;
	}
	public void setHot(int hot) {
		this.hot = hot;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImg_url() {
		return img_url;
	}
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	public String getDescribe() {
		return describe;
	}
	public void setDescribe(String describe) {
		this.describe = describe;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Collect [id=" + id + ", img_url=" + img_url + ", describe=" + describe + ", price=" + price + ", hot="
				+ hot + "]";
	}
	
	
	

}
