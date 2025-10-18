import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const tabs = ["Uber", "Eats", "Shops", "Courier"];
const suggestions = [
  { label: "Grocery", badge: "Promo", icon: "🧺" },
  { label: "Ride", badge: "Promo", icon: "🚗" },
  { label: "Food", badge: "40%", icon: "🍛" },
  { label: "Rental Cars", badge: "Promo", icon: "🔑" },
  { label: "Send items", badge: "", icon: "📦" },
  { label: "Alcohol", badge: "",  icon: "🍹" },
  { label: "Retail", badge: "", icon: "📚" },
  { label: "Health", badge: "", icon: "🧪" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"Uber" | "Eats" | "Shops" | "Courier">("Uber");

  // helpers (if/else, your style)
  const tabIcon = (t: string) => {
    let icon = "🚗";
    if (t === "Eats") icon = "🥗";
    else if (t === "Shops") icon = "🧺";
    else if (t === "Courier") icon = "📦";
    return icon;
  };

  const badgeColor = (txt: string) => {
    let bg = "#16A34A"; // green
    if (txt === "40%") bg = "#059669";
    return bg;
  };

  const onAlert = () => Alert.alert("Alert Button pressed");

  return (
    <View style={s.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
        {/* ===== Tabs row ===== */}
        <View style={s.tabsRow}>
          {tabs.map((t) => {
            const active = activeTab === t;
            return (
              <TouchableOpacity
                key={t}
                onPress={() => setActiveTab(t as any)}
                activeOpacity={0.7}
                style={s.tabWrap}
              >
                <View style={s.tabInner}>
                  <Text style={[s.tabText, active && s.tabTextActive]}>
                    {tabIcon(t)} {t}
                  </Text>
                  {t === "Eats" ? <View style={s.greenDot} /> : null}
                </View>
                <View style={[s.underline, active && s.underlineActive]} />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ===== Search bar ===== */}
        <View style={s.searchRow}>
          <TextInput
            placeholder="Where to?"
            placeholderTextColor="#9CA3AF"
            style={s.searchInput}
          />
          <View style={s.searchRight}>
            <Text style={s.calIcon}>📅</Text>
            <Text style={s.laterText}>Later</Text>
          </View>
        </View>

        {/* ===== Recent locations ===== */}
        <View style={s.recentList}>
          <View style={s.recentCard}>
            <View style={s.recentLeft}><Text>🕒</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={s.recentTitle}>241 Tarawood Close NE</Text>
              <Text style={s.recentSub}>Calgary, Alberta T3J 4T1</Text>
            </View>
          </View>

          <View style={s.recentCard}>
            <View style={s.recentLeft}><Text>✈️</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={s.recentTitle}>Calgary International Airport (YYC)</Text>
              <Text style={s.recentSub}>2000 Airport Rd NE, Calgary, AB T2E 6W5</Text>
            </View>
          </View>
        </View>

        {/* ===== Suggestions header ===== */}
        <View style={s.Header}>
          <Text style={s.h2}>Suggestions</Text>
          <Text style={s.seeAll}>See all</Text>
        </View>

        {/* ===== Suggestions grid (4 cols x 2 rows) ===== */}
        <View style={s.grid}>
          {suggestions.map((it) => {
            const showBadge = it.badge !== "";
            return (
              <View key={it.label} style={s.tile}>
                {showBadge ? (
                  <View style={[s.badge, { backgroundColor: badgeColor(it.badge) }]}>
                    <Text style={s.badgeText}>{it.badge}</Text>
                  </View>
                ) : null}
                <Text style={s.tileIcon}>{it.icon}</Text>
                <Text style={s.tileLabel}>{it.label}</Text>
              </View>
            );
          })}
        </View>

        {/* ===== Promo card ===== */}
        <View style={s.promo}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={s.promoTitle}>You have a promo to use</Text>
            <View style={s.promoBtn}>
              <Text style={s.promoBtnText}>Order Uber Eats</Text>
            </View>
          </View>
          <Image
            source={{
              uri:
                "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg",
            }}
            style={s.promoImg}
          />
        </View>

        {/* ===== More ways ===== */}
        <Text style={s.moreTitle}>More ways to use Uber</Text>
        <View style={{ height: 12 }} />
      </ScrollView>

      {/* bottom dock (visual only) */}
      <View style={s.bottomDock}>
        <View style={s.navItem}>
          <Text style={[s.navIcon, s.navIconActive]}>🏠</Text>
          <Text style={[s.navText, s.navTextActive]}>Home</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navIcon}>▦</Text>
          <Text style={s.navText}>Services</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navIcon}> 🏠</Text>
          <Text style={s.navText}>Activity</Text>
        </View>
        <View style={s.navItem}>
          <Text style={s.navIcon}>👤</Text>
          <Text style={s.navText}>Account</Text>
        </View>
      </View>

      {/* assignment-required alert button */}
      <View style={s.alertBar}>
        <TouchableOpacity onPress={onAlert} style={s.alertBtn} activeOpacity={0.8}>
          <Text style={s.alertText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },

  tabsRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 4,
  },
  tabWrap: { marginRight: 18 },
  tabInner: { flexDirection: "row", alignItems: "center" },
  tabText: { color: "#111827", fontSize: 18, fontWeight: "800" },
  tabTextActive: { color: "#111827" },
  greenDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#10B981", marginLeft: 6 },
  underline: { height: 2, backgroundColor: "transparent", marginTop: 6, borderRadius: 1 },
  underlineActive: { backgroundColor: "#111827" },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginHorizontal: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  searchInput: { flex: 1, fontSize: 18, color: "#111827" },
  searchRight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 10,
  },
  calIcon: { marginRight: 6 },
  laterText: { color: "#111827", fontWeight: "700" },

  recentList: { paddingHorizontal: 16, marginTop: 12, gap: 10 },
  recentCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  recentLeft: {
    width: 34, height: 34, borderRadius: 17,
    alignItems: "center", justifyContent: "center",
    backgroundColor: "#F3F4F6",
    marginRight: 12,
  },
  recentTitle: { color: "#111827", fontSize: 16, fontWeight: "700" },
  recentSub: { color: "#6B7280", fontSize: 12, marginTop: 2 },

  Header: {
    paddingHorizontal: 16, marginTop: 18,
    flexDirection: "row", alignItems: "baseline", justifyContent: "space-between",
  },
  h2: { color: "#111827", fontSize: 22, fontWeight: "800" },
  seeAll: { color: "#6B7280", fontSize: 14, fontWeight: "700" },

  grid: {
    paddingHorizontal: 16,
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tile: {
    width: "23%", aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 1, borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    alignItems: "center", justifyContent: "center",
    marginBottom: 12, position: "relative",
  },
  tileIcon: { fontSize: 22, marginBottom: 6 },
  tileLabel: { color: "#111827", fontSize: 12, textAlign: "center" },
  badge: { position: "absolute", top: 6, left: 6, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  badgeText: { color: "#FFFFFF", fontSize: 10, fontWeight: "800" },

  promo: {
    marginTop: 18, marginHorizontal: 16,
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#F5F1E8",
    borderWidth: 1, borderColor: "#E5E7EB",
    borderRadius: 18, padding: 16,
  },
  promoTitle: { color: "#111827", fontSize: 20, fontWeight: "800", marginBottom: 12 },
  promoBtn: {
    alignSelf: "flex-start", backgroundColor: "#EEF2FF",
    paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: 999, borderWidth: 1, borderColor: "#E5E7EB",
  },
  promoBtnText: { color: "#111827", fontWeight: "800" },
  promoImg: { width: 300, height: 100, borderRadius: 14 },

  moreTitle: { color: "#111827", fontSize: 22, fontWeight: "800", paddingHorizontal: 16, marginTop: 18 },

  bottomDock: {
    position: "absolute", left: 16, right: 16, bottom: 74,
    height: 64, borderRadius: 32, backgroundColor: "#FFFFFF",
    borderWidth: 1, borderColor: "#E5E7EB",
    flexDirection: "row", alignItems: "center", justifyContent: "space-around",
    shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 3 }, elevation: 4,
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navIcon: { fontSize: 18, marginBottom: 2, color: "#6B7280" },
  navText: { fontSize: 12, color: "#6B7280", fontWeight: "700" },
  navIconActive: { color: "#111827" },
  navTextActive: { color: "#111827" },

  alertBar: {
    position: "absolute", left: 0, right: 0, bottom: 0,
    padding: 12, backgroundColor: "#FFFFFFF0",
    borderTopWidth: 1, borderTopColor: "#E5E7EB",
  },
  alertBtn: { alignSelf: "center", backgroundColor: "#111827", paddingHorizontal: 28, paddingVertical: 12, borderRadius: 999 },
  alertText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});

