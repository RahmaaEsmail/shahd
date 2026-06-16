"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/i18n/i18n";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COUNTRY_CODES = [
  "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW",
  "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT",
  "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH",
  "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD",
  "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC",
  "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF",
  "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU",
  "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN",
  "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE",
  "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT",
  "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT",
  "MX", "FM", "MD", "MC", "MN", "ME", "MS", "NC", "NZ", "NI", "NE", "NG", "NU",
  "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH",
  "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC",
  "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX",
  "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE",
  "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR",
  "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE",
  "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW",
];

const languages = [
  {
    label: "العربية",
    shortLabel: "Arabic",
    value: "ar",
    flag: "https://flagcdn.com/sa.svg",
  },
  {
    label: "Slovenčina",
    shortLabel: "Slovakia",
    value: "sk",
    flag: "https://flagcdn.com/sk.svg",
  },
  {
    label: "English",
    shortLabel: "English",
    value: "en",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    label: "German",
    shortLabel: "German",
    value: "de",
    flag: "https://flagcdn.com/de.svg",
  },
];

const currencies = [
  {
    label: "اليورو",
    shortLabel: "Euro",
    value: "EUR",
    flag: "https://flagcdn.com/eu.svg",
  },
  {
    label: "الدولار الأمريكي",
    shortLabel: "USD",
    value: "USD",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    label: "الريال السعودي",
    shortLabel: "Saudi Riyal",
    value: "SAR",
    flag: "https://flagcdn.com/sa.svg",
  },
];

export default function LanguageCurrencySettings() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const [language, setLanguage] = useState(
    languages.find((l) => l.value === i18n.language.split("-")[0]) ||
      languages[0]
  );

  const [currency, setCurrency] = useState(currencies[2]);
  const [country, setCountry] = useState("Saudi Arabia");

  const countries = useMemo(() => {
    const displayNames = new Intl.DisplayNames(
      [i18n.language === "ar" ? "ar" : "en"],
      { type: "region" }
    );

    return COUNTRY_CODES.map((code) => ({
      label: displayNames.of(code) || code,
      value: code,
      flag: `https://flagcdn.com/w40/${code.toLowerCase()}.png`,
    })).sort((a, b) => a.label.localeCompare(b.label));
  }, [i18n.language]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!open) return;

      const target = e.target;

      if (!(target instanceof Element)) return;

      const clickedInsideWrapper =
        wrapperRef.current && wrapperRef.current.contains(target);

      const clickedInsideSelectPortal =
        target.closest(".settings-select-content") ||
        target.closest("[data-radix-popper-content-wrapper]") ||
        target.closest("[data-radix-portal]") ||
        target.closest("[data-slot='select-content']") ||
        target.closest("[role='listbox']") ||
        target.closest("[role='option']");

      if (clickedInsideWrapper || clickedInsideSelectPortal) {
        return;
      }

      setOpen(false);
    }

    document.addEventListener("pointerdown", handleClickOutside, true);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside, true);
    };
  }, [open]);

  const handleApply = () => {
    const settings = {
      language: language.value,
      country,
      currency: currency.value,
    };

    i18n.changeLanguage(language.value);
    localStorage.setItem("site_settings", JSON.stringify(settings));
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative pointer-events-auto">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={`absolute bottom-20 ${i18n?.language == "ar" ? "right-3" :"left-0"} w-[300px] bg-white rounded-[20px] shadow-2xl p-5 z-[9999999] border border-gray-50`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <div className="flex flex-col gap-4">
              {/* Ship To */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-gray-400 font-poppins! px-2">
                  {t("Ship To")}
                </label>

                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="w-full h-11 font-poppins! rounded-xl border-gray-100 bg-gray-50/30 flex-row-reverse">
                    <SelectValue>
                      <span className="text-[14px] font-poppins! font-medium text-gray-700">
                        {country}
                      </span>
                    </SelectValue>
                  </SelectTrigger>

                  <SelectContent className="settings-select-content z-[99999999] max-h-60 overflow-y-auto">
                    {countries.map((c) => (
                      <SelectItem
                        key={c.value}
                        value={c.label}
                        className="flex-row-reverse font-poppins!"
                      >
                        <div className="flex items-center gap-2 flex-row-reverse w-full justify-between">
                          <img
                            src={c.flag}
                            alt=""
                            className="w-5 h-3.5 rounded-sm object-cover"
                          />
                          <span className="font-poppins!">{c.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Currency */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-gray-400 font-poppins px-2">
                  {t("Currency")}
                </label>

                <Select
                  value={currency.value}
                  onValueChange={(val) => {
                    const selectedCurrency = currencies.find(
                      (c) => c.value === val
                    );

                    if (selectedCurrency) {
                      setCurrency(selectedCurrency);
                    }
                  }}
                >
                  <SelectTrigger className="w-full h-11 rounded-xl font-poppins! border-gray-100 bg-gray-50/30 flex-row-reverse">
                    <SelectValue>
                      <div className="flex items-center gap-2 flex-row-reverse">
                        <img
                          src={currency.flag}
                          alt=""
                          className="w-5 h-3.5 rounded-sm object-cover"
                        />
                        <span className="text-[14px] font-poppins! font-medium text-gray-700">
                          {i18n.language === "ar"
                            ? currency.label
                            : currency.shortLabel}
                        </span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>

                  <SelectContent className="settings-select-content z-[99999999]">
                    {currencies.map((c) => (
                      <SelectItem
                        key={c.value}
                        value={c.value}
                        className="flex-row-reverse"
                      >
                        <div className="flex items-center gap-2 flex-row-reverse w-full justify-between">
                          <img
                            src={c.flag}
                            alt=""
                            className="w-5 h-3.5 rounded-sm object-cover"
                          />
                          <span className="font-poppins!">
                            {i18n.language === "ar"
                              ? c.label
                              : c.shortLabel}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Language */}
              <div className="flex flex-col gap-2">
                <label className="text-[12px] text-gray-400 font-poppins px-2">
                  {t("Language")}
                </label>

                <Select
                  value={language.value}
                  onValueChange={(val) => {
                    const selectedLanguage = languages.find(
                      (l) => l.value === val
                    );

                    if (selectedLanguage) {
                      setLanguage(selectedLanguage);
                    }
                  }}
                >
                  <SelectTrigger className="w-full h-11 rounded-xl border-gray-100 bg-gray-50/30 flex-row-reverse">
                    <SelectValue>
                      <div className="flex items-center gap-2 flex-row-reverse">
                        <img
                          src={language.flag}
                          alt=""
                          className="w-5 h-3.5 rounded-sm object-cover"
                        />
                        <span className="text-[14px] font-poppins! font-medium text-gray-700">
                          {language.label}
                        </span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>

                  <SelectContent className="settings-select-content z-[99999999]">
                    {languages.map((l) => (
                      <SelectItem
                        key={l.value}
                        value={l.value}
                        className="flex-row-reverse"
                      >
                        <div className="flex items-center gap-2 flex-row-reverse w-full justify-between">
                          <img
                            src={l.flag}
                            alt=""
                            className="w-5 h-3.5 rounded-sm object-cover"
                          />
                          <span className="font-poppins!">{l.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Apply Button */}
              <Button
                onClick={handleApply}
                className="w-full h-12 bg-[#2D2D2D] font-poppins! hover:bg-black text-white rounded-xl font-bold text-[14px] mt-2 transition-all active:scale-[0.98]"
              >
                {t("Apply")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className="flex items-end gap-3 rounded-md border border-primary/50 bg-white px-3 py-2 shadow-xl backdrop-blur-md pointer-events-auto cursor-pointer relative z-[99999999]"
      >
        <div className="flex items-center gap-2 pointer-events-none">
          <span className="font-poppins text-[14px] font-bold text-[#414141]">
            {t(language.shortLabel)}
          </span>
          <img
            src={language.flag}
            alt={language.label}
            className="h-4 w-6 rounded-sm object-cover"
          />
        </div>

        <div className="h-5 w-px bg-gray-300 pointer-events-none" />

        <div className="flex items-center gap-2 pointer-events-none">
          <span className="font-poppins text-[14px] font-bold text-[#414141]">
            {t(currency.shortLabel)}
          </span>
          <img
            src={currency.flag}
            alt={currency.label}
            className="h-4 w-6 rounded-sm object-cover"
          />
        </div>
      </button>
    </div>
  );
}