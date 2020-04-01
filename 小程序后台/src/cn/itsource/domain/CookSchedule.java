package cn.itsource.domain;

public class CookSchedule {
	private int id;
	private String head_img;
	private String data;
	private String time;
	private String week;
	private String body_img;
	private String title;
	private int price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getHead_img() {
		return head_img;
	}
	public void setHead_img(String head_img) {
		this.head_img = head_img;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getWeek() {
		return week;
	}
	public void setWeek(String week) {
		this.week = week;
	}
	public String getBody_img() {
		return body_img;
	}
	public void setBody_img(String body_img) {
		this.body_img = body_img;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "CookSchedule [id=" + id + ", head_img=" + head_img + ", data=" + data + ", time=" + time + ", week="
				+ week + ", body_img=" + body_img + ", title=" + title + ", price=" + price + "]";
	}
	
	

}
